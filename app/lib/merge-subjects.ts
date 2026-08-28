import {
  paperFilenames,
  type Compilation,
  type CompilationWithPdfs,
  type Subject,
  type SubjectWithPdf,
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

function indexByBasename(blobs: BlobRef[]): Map<string, BlobRef> {
  const byFile = new Map<string, BlobRef>();
  for (const blob of blobs) {
    byFile.set(basename(blob.pathname).toLowerCase(), blob);
  }
  return byFile;
}

export function mergeSubjectsWithBlobs(
  subjects: Subject[],
  notesBlobs: BlobRef[],
  papersBlobs: BlobRef[],
): SubjectWithPdf[] {
  const byNoteFile = indexByBasename(notesBlobs);
  const byPaperFile = indexByBasename(papersBlobs);

  return subjects.map((subject) => {
    const match = byNoteFile.get(subject.file.toLowerCase());
    const [paper1File, paper2File] = paperFilenames(subject);

    return {
      ...subject,
      url: match?.url ?? null,
      size: match?.size ?? null,
      papers: [
        { index: 1 as const, file: paper1File, ...paperMatch(byPaperFile, paper1File) },
        { index: 2 as const, file: paper2File, ...paperMatch(byPaperFile, paper2File) },
      ],
    };
  });
}

function paperMatch(
  byPaperFile: Map<string, BlobRef>,
  file: string,
): { url: string | null; size: number | null } {
  const match = byPaperFile.get(file.toLowerCase());
  return { url: match?.url ?? null, size: match?.size ?? null };
}

export function mergeCompilationWithBlobs(
  compilation: Compilation,
  notesBlobs: BlobRef[],
  papersBlobs: BlobRef[],
): CompilationWithPdfs {
  return {
    ...compilation,
    subjects: mergeSubjectsWithBlobs(compilation.subjects, notesBlobs, papersBlobs),
  };
}

