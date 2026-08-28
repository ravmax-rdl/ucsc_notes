export type SubjectIllustration =
  | "lab"
  | "c-structures"
  | "systems"
  | "discrete"
  | "algebra"
  | "probability"
  | "algorithms"
  | "engineering";

export type Subject = {
  slug: string;
  title: string;
  code: string | null;
  file: string;
  overview: string;
  topics: string[];
  illustration: SubjectIllustration;
};

export type PaperWithUrl = {
  index: 1 | 2;
  file: string;
  url: string | null;
  size: number | null;
};

export type SubjectWithPdf = Subject & {
  url: string | null;
  size: number | null;
  papers: PaperWithUrl[];
};

export type Compilation = {
  id: string;
  year: number;
  semester: number;
  label: string;
  shortLabel: string;
  notesBlobPrefix: string;
  papersBlobPrefix: string;
  subjects: Subject[];
};

export type CompilationWithPdfs = Omit<Compilation, "subjects"> & {
  subjects: SubjectWithPdf[];
};

/**
 * Sample papers reuse the note's basename with a `_01` / `_02` suffix, e.g.
 * `Computer_Systems.pdf` -> `Computer_Systems_01.pdf`, `Computer_Systems_02.pdf`.
 */
export function paperFilenames(subject: Pick<Subject, "file">): [string, string] {
  const dot = subject.file.lastIndexOf(".");
  const stem = dot === -1 ? subject.file : subject.file.slice(0, dot);
  const ext = dot === -1 ? "" : subject.file.slice(dot);
  return [`${stem}_01${ext}`, `${stem}_02${ext}`];
}

/** Add new years/semesters here. Each compilation maps to a Blob folder prefix. */
export const COMPILATIONS: Compilation[] = [
  {
    id: "y1-sem01",
    year: 1,
    semester: 1,
    label: "Year 1 · Semester 01",
    shortLabel: "Y1 Sem 01",
    notesBlobPrefix: "Compilations_Y01_S01/",
    papersBlobPrefix: "Papers_Y01_S01/",
    subjects: [
      {
        slug: "application-lab",
        title: "Application Laboratory",
        code: "ENH 1301",
        file: "Application_Lab.pdf",
        overview:
          "A single reference for the lab syllabus: LibreOffice, Linux fundamentals, Bash, and the day-to-day tools used in practical work.",
        topics: [
          "LibreOffice",
          "Linux FS",
          "Permissions",
          "Vim",
          "Bash",
          "Git",
          "LaTeX",
          "SSH",
        ],
        illustration: "lab",
      },
      {
        slug: "data-structures-and-c",
        title: "Data Structures and Program Design in C",
        code: "SCS 1301",
        file: "Data_Structures_and_Program_Design_in_C.pdf",
        overview:
          "The C language, the GNU toolchain, pointers and memory, linear data structures, and analysis of algorithms, consolidated from lectures, tutorials and labs.",
        topics: [
          "C language",
          "Types and I/O",
          "Control flow",
          "Pointers",
          "Memory",
          "gcc / gdb",
          "valgrind",
          "Linked lists",
          "Stacks and queues",
          "Algorithm analysis",
        ],
        illustration: "c-structures",
      },
      {
        slug: "computer-systems",
        title: "Computer Systems",
        code: "SCS 1305",
        file: "Computer_Systems.pdf",
        overview:
          "From bits and number systems through combinational and sequential logic to computer organisation and memory systems.",
        topics: [
          "Data representation",
          "Boolean algebra",
          "Combinational logic",
          "Sequential logic",
          "Architecture",
          "Memory",
        ],
        illustration: "systems",
      },
      {
        slug: "discrete-mathematics",
        title: "Discrete Mathematics",
        code: "SCS 1302",
        file: "Discrete_Mathematics.pdf",
        overview:
          "Propositional and predicate logic, proofs, set theory, functions, relations, and elementary number theory with worked solutions.",
        topics: [
          "Prop. logic",
          "Predicate logic",
          "Proofs",
          "Sets",
          "Functions",
          "Relations",
          "Number theory",
        ],
        illustration: "discrete",
      },
      {
        slug: "linear-algebra",
        title: "Linear Algebra",
        code: "SCS 1306",
        file: "Linear_Algebra.pdf",
        overview:
          "The course built around Ax = b: elimination, inverses, determinants, vector spaces, orthogonality, and eigenvalues.",
        topics: [
          "Elimination",
          "Inverses",
          "Determinants",
          "Vector spaces",
          "Orthogonality",
          "Eigenvalues",
        ],
        illustration: "algebra",
      },
      {
        slug: "probability-statistics",
        title: "Probability and Statistics",
        code: "SCS 1307",
        file: "Probability_Statistics.pdf",
        overview:
          "Descriptive statistics, axiomatic probability, conditioning and Bayes, random variables, and the classic discrete and continuous distributions.",
        topics: [
          "Descriptive stats",
          "Probability",
          "Bayes",
          "Random variables",
          "Binomial",
          "Poisson",
          "Normal",
        ],
        illustration: "probability",
      },
      {
        slug: "problem-solving",
        title: "Problem Solving Strategies",
        code: "SCS 1304",
        file: "Problem_Solving.pdf",
        overview:
          "Computational thinking, recursion, asymptotic analysis, and the major algorithm design paradigms through to P and NP.",
        topics: [
          "Computational thinking",
          "Recursion",
          "Asymptotics",
          "Brute force",
          "Divide-and-conquer",
          "DP",
          "Greedy",
          "Backtracking",
          "P/NP",
        ],
        illustration: "algorithms",
      },
      {
        slug: "software-engineering",
        title: "Introduction to Software Engineering",
        code: "SCS 1303",
        file: "Software_engineering.pdf",
        overview:
          "Process models, requirements, design principles, UML, and verification practices for building maintainable software.",
        topics: [
          "Process models",
          "Requirements",
          "Design principles",
          "UML",
          "V&V",
          "Agile",
        ],
        illustration: "engineering",
      },
    ],
  },
];

export function allSubjects(compilations: Compilation[] = COMPILATIONS): Subject[] {
  return compilations.flatMap((c) => c.subjects);
}
