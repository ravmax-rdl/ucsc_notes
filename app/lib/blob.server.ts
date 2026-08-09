import { list } from "@vercel/blob";
import type { BlobRef } from "./merge-subjects";

export async function listPdfsByPrefix(prefix: string): Promise<BlobRef[]> {
  const token = process.env.NOTES_READ_WRITE_TOKEN;

  if (!token) {
    console.error("[blob] NOTES_READ_WRITE_TOKEN is not set");
    return [];
  }

  try {
    const blobs: BlobRef[] = [];
    let cursor: string | undefined;
    let hasMore = true;

    while (hasMore) {
      const result = await list({
        prefix,
        token,
        cursor,
        limit: 1000,
      });

      for (const blob of result.blobs) {
        if (blob.pathname.toLowerCase().endsWith(".pdf")) {
          blobs.push({
            pathname: blob.pathname,
            url: blob.url,
            size: blob.size,
          });
        }
      }

      cursor = result.cursor;
      hasMore = result.hasMore;
    }

    return blobs;
  } catch (error) {
    console.error(`[blob] Failed to list ${prefix}`, error);
    return [];
  }
}
