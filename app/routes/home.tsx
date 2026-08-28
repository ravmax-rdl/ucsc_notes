import type { Route } from "./+types/home";
import { COMPILATIONS } from "../data/catalog";
import { listPdfsByPrefix } from "../lib/blob.server";
import { mergeCompilationWithBlobs } from "../lib/merge-subjects";
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
        "Course compilations of notes and sample papers from lectures, exercises, tutorials and lab sheets with Claude Opus 5 on high/xhigh effort. Organised by year and semester.",
    },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  const compilations = await Promise.all(
    COMPILATIONS.map(async (compilation) => {
      const [notesBlobs, papersBlobs] = await Promise.all([
        listPdfsByPrefix(compilation.notesBlobPrefix),
        listPdfsByPrefix(compilation.papersBlobPrefix),
      ]);
      return mergeCompilationWithBlobs(compilation, notesBlobs, papersBlobs);
    }),
  );

  return { compilations };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { compilations } = loaderData;
  const primary = compilations[0];

  return (
    <>
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
