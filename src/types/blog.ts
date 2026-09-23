export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    avatarUrl: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  imageUrl: string;
  featured?: boolean;
}
