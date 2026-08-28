# UCSC Notes

An independent course-compilation archive for Computer Science notes and sample papers, organised by **year and semester**. Subject overviews and topics are curated in the app; note and paper PDF URLs are loaded live from Vercel Blob.

This project is **not affiliated with** the University of Colombo School of Computing (UCSC).

## Extending the archive

Add a new semester or year in [`app/data/catalog.ts`](app/data/catalog.ts) by appending a `Compilation` entry:

```ts
{
  id: "y1-sem02",
  year: 1,
  semester: 2,
  label: "Year 1 · Semester 02",
  shortLabel: "Y1 Sem 02",
  notesBlobPrefix: "Compilations_Y01_S02/",
  papersBlobPrefix: "Papers_Y01_S02/",
  subjects: [/* ... */],
}
```

Upload matching PDFs under those two Blob prefixes. The home page lists every compilation and merges files by basename. Sample-paper filenames reuse each subject's note basename with a `_01` / `_02` suffix (see `paperFilenames` in `app/data/catalog.ts`), e.g. `Computer_Systems.pdf` -> `Computer_Systems_01.pdf`, `Computer_Systems_02.pdf`.

## Stack

- React Router 8 (SSR) + Vite
- Tailwind CSS v4
- `@vercel/blob` for listing PDFs
- Motion for UI animation
- Dark mode by default (toggle in footer)

## Setup

```bash
bun install
```

Copy environment variables:

| Variable | Purpose |
|----------|---------|
| `NOTES_STORE_ID` | Vercel Blob store id (reference / dashboard) |
| `NOTES_READ_WRITE_TOKEN` | Blob read-write token used by the server loader to `list()` |

Example Blob layout:

```text
Compilations_Y01_S01/
  Application_Lab.pdf
  Data_Structures_and_Program_Design_in_C.pdf
  Computer_Systems.pdf
  ...
Papers_Y01_S01/
  Application_Lab_01.pdf
  Application_Lab_02.pdf
  Data_Structures_and_Program_Design_in_C_01.pdf
  Data_Structures_and_Program_Design_in_C_02.pdf
  ...
Compilations_Y01_S02/   # add when ready
  ...
Papers_Y01_S02/         # add when ready
  ...
```

The local `pdfs/` folder is **reference only** for topic extraction. The site does not serve those files directly.

## Development

```bash
bun run dev
```

App: [http://localhost:5173](http://localhost:5173)

## Build

```bash
bun run build
bun run start
```

Typecheck:

```bash
bun run typecheck
```

## Deploy (Vercel)

1. Set `NOTES_READ_WRITE_TOKEN` (and optionally `NOTES_STORE_ID`) in the project environment.
2. Keep SSR enabled for the React Router build.
3. Upload PDFs under each compilation's note and paper Blob prefixes.

Each "Open Note" control links straight to the public Blob URL in a new tab; the "Paper 01" / "Paper 02" controls below it do the same for sample papers, when uploaded.
