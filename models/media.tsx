export type MediaType = {
  id: number,
  title: string,
  content: string,
  date: string,
  thumbnail: string,
  hashtag: string,
  altImage: string,
  createdAt: string,
  startDate: string,
  isHotNews?: boolean,
  isHotEvent?: boolean,
  forSib?: boolean,
  forInter?: boolean,
  forPolicy?: boolean,
}
