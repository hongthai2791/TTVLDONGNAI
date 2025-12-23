export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  date: string;
  isHot?: boolean;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  image?: string;
  summary: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
