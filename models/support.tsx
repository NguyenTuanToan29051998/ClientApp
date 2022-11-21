export type SupportPost = {
  id: number;
  title: string;
  content: string;
  date: string;
  thumbnail: string;
  hashtag: string;
  altImage: string;
  createdAt: string;
  isHotNews?: boolean;
  isHotEvent?: boolean;
}
