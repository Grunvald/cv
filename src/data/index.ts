import type { PersonId, Resume, ResumeLang } from "../types/resume";
import { resume as vasiliEnglish } from "./vasili/english";
import { resume as vasiliRussian } from "./vasili/russian";
import { resume as vasiliSpanish } from "./vasili/spanish";
import { resume as maksimEnglish } from "./maksim/english";
import { resume as maksimRussian } from "./maksim/russian";
import { resume as maksimSpanish } from "./maksim/spanish";

export const resumes: Record<PersonId, Record<ResumeLang, Resume>> = {
  vasili: {
    english: vasiliEnglish,
    russian: vasiliRussian,
    spanish: vasiliSpanish,
  },
  maksim: {
    english: maksimEnglish,
    russian: maksimRussian,
    spanish: maksimSpanish,
  },
};

export const personLabel: Record<PersonId, string> = {
  vasili: "Vasili",
  maksim: "Maksim",
};

export const personSlug: Record<PersonId, string> = {
  vasili: "vasili-sholukh",
  maksim: "maksim-bogdanov",
};
