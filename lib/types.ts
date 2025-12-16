export type Project = {
  id: string;
  name: string;
  location: string;
  year: string;
  image_url: string | null;
  created_at: string;
  updated_at: string;
};

export type Job = {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  created_at: string;
  updated_at: string;
};
