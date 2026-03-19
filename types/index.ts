export interface TechItem {
  name: string;
  color: string;
  svg: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  thumbStyle: React.CSSProperties;
  thumbText: string;
  badge?: string;
  repoUrl: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
  tags: string[];
}
