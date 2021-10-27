import { ReactNode } from "react";

export type RouteProps = {
  page: string;
  slug: string;
  children: ReactNode;
};

// Post Interface
export type PostProps = {
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};
