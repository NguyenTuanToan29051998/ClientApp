export type BookType = {
  id: number,
  image: string,
  name: string,
  filePath: string,
  authorName: string,
  isFreeDownload: boolean,
}

export type VideoType = {
  id: number,
  name: string,
  youtubeLink: string,
}

export type DocumentType = {
  id: number,
  name: string,
  filePath: string,
  isFreeDownload: boolean,
}
