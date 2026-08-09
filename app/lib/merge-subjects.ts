import type {
  Compilation,
  CompilationWithPdfs,
  Subject,
  SubjectWithPdf,
} from "../data/catalog";

export type BlobRef = {
  pathname: string;
  url: string;
  size: number;
};

function basename(pathname: string): string {
  const parts = pathname.replace(/\\/g, "/").split("/");
  return parts[parts.length - 1] ?? pathname;
}

export function mergeSubjectsWithBlobs(
  subjects: Subject[],
  blobs: BlobRef[],
): SubjectWithPdf[] {
  const byFile = new Map<string, BlobRef>();

  for (const blob of blobs) {
    byFile.set(basename(blob.pathname).toLowerCase(), blob);
  }

  return subjects.map((subject) => {
    const match = byFile.get(subject.file.toLowerCase());
    return {
      ...subject,
      url: match?.url ?? null,
      size: match?.size ?? null,
    };
  });
}

export function mergeCompilationWithBlobs(
  compilation: Compilation,
  blobs: BlobRef[],
): CompilationWithPdfs {
  return {
    ...compilation,
    subjects: mergeSubjectsWithBlobs(compilation.subjects, blobs),
  };
}
