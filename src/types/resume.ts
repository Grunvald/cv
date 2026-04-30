export type ContactType = 'phone' | 'email'

export interface Contact {
  type: ContactType
  label: string
  href: string
}

export interface Section {
  title: string
  items: string[]
}

export interface Project {
  name: string
  description?: string
  sections: Section[]
}

export interface Experience {
  company: string
  period: string
  role: string
  description?: string
  projects: Project[]
}

export interface Language {
  name: string
  level: string
}

export interface ResumeHeader {
  name: string
  title: string
  photo: string
  contacts: Contact[]
}

export interface Resume {
  header: ResumeHeader
  summary: string
  skills: string
  experiences: Experience[]
  languages: Language[]
}

export type ResumeLang = 'english' | 'russian' | 'spanish'
