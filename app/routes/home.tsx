import type { Route } from "./+types/home";
import { COMPILATIONS } from "../data/catalog";
import { listPdfsByPrefix } from "../lib/blob.server";
import { mergeCompilationWithBlobs } from "../lib/merge-subjects";
import { SiteNav } from "../components/SiteNav";
import { Hero } from "../components/Hero";
import { TopicNetworkViz } from "../components/TopicNetworkViz";
import { SubjectArchive } from "../components/SubjectArchive";
import { SiteFooter } from "../components/SiteFooter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "UCSC Notes | Course Compilations" },
    {
      name: "description",
      content:
        "Course compilations from lecture notes, exercises, tutorials and lab sheets with Claude Opus 5 on high/xhigh effort. Organised by year and semester.",
    },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  const compilations = await Promise.all(
    COMPILATIONS.map(async (compilation) => {
      const blobs = await listPdfsByPrefix(compilation.blobPrefix);
      return mergeCompilationWithBlobs(compilation, blobs);
    }),
  );

  return { compilations };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { compilations } = loaderData;
  const primary = compilations[0];

  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        {primary ? (
          <TopicNetworkViz
            subjects={primary.subjects}
            label={primary.shortLabel}
          />
        ) : null}
        <SubjectArchive compilations={compilations} />
      </main>
      <SiteFooter />
    </>
  );
}
