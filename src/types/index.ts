export interface ProductUpdate {
  id: string;
  feature: string;
  status: 'Done' | 'Pending';
  priority: 'High' | 'Medium' | 'Low';
  date: string; // ISO date format
}

export interface UserInteraction {
  id: string;
  question: string;
  answer: string;
  feature: string;
  featureStatus: 'Done' | 'Pending';
}

export type SortDirection = 'asc' | 'desc' | null;

export interface SortConfig<T> {
  key: keyof T;
  direction: SortDirection;
}

export interface Stat {
  id: string;
  label: string;
  value: string | number;
  source: string;
}

export interface InfoCard {
  id: string;
  title: string;
  content: string;
}
