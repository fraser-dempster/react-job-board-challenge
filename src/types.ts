export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  postedAt: string;
};

export type Filter = {
  type?: string[];
  location?: string[];
};
