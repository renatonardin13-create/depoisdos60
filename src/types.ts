export interface ChapterItem {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  iconName: string;
  summary: string;
  practicalTipsCount: number;
  highlights: string[];
  excerptQuote: string;
}

export interface PersonaItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  benefits: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface AssessmentQuestion {
  id: number;
  question: string;
  description: string;
  optionYes: string;
  optionNo: string;
  relevantChapter: number;
  tip: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  highlight: string;
  rating: number;
  avatarText: string;
  avatarUrl?: string;
}

