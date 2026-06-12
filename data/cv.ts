export type CvEntry = {
  year: string;
  title: string;
};

export type CvSection = {
  title: string;
  entries: CvEntry[];
};

export const cvSections: CvSection[] = [
  {
    title: "Education",
    entries: [
      {
        year: "2019",
        title: "고졸 검정고시 합격 / High School Equivalency Examination"
      },
      {
        year: "2023-",
        title:
          "한국예술종합학교 디자인학부 졸업예정 / BFA Candidate, Department of Design, Korea National University of Arts"
      }
    ]
  },
  {
    title: "Works",
    entries: [
      {
        year: "2024",
        title: "RIRA / Brand planning, UX·UI design — 야생동물과의 공생을 위한 브랜드"
      },
      {
        year: "2024",
        title: "단편영화 'Absent Presence (투명인간)' / Director"
      },
      {
        year: "2024",
        title: "단편영화 'Tropic' / Art Department"
      },
      {
        year: "2025",
        title: "'MVRK HAUS' Documentary / Director, Interview, Editing, Motion Graphics"
      },
      {
        year: "2025",
        title:
          "Fashion brand Gochi Season 2 '다정한 배반 (Tender Betrayal)' / Season planning, Lookbook art direction, Product making"
      },
      {
        year: "2026",
        title: "Gochi Styling Project 'GP fit check with CHI' / Styling, SNS content"
      },
      {
        year: "2026",
        title: "AI 단편영화 'EROS!' / Character design, Shot generation"
      }
    ]
  },
  {
    title: "Exhibition",
    entries: [
      {
        year: "2026",
        title: "Coffee Rhapsody"
      }
    ]
  },
  {
    title: "Skills",
    entries: [
      {
        year: "",
        title: "Adobe Illustrator, Premiere Pro, After Effects, Photoshop, Lightroom"
      },
      {
        year: "",
        title: "Figma"
      },
      {
        year: "",
        title: "AI tools (Higgsfield, Midjourney, etc.)"
      },
      {
        year: "",
        title: "Film direction & planning / 필름 연출·기획"
      },
      {
        year: "",
        title: "Film editing / 편집"
      },
      {
        year: "",
        title: "UX·UI design"
      }
    ]
  }
];
