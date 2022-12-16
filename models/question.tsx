export type QuestionType = {
  id: number,
  question: string,
  answer: string,
  authorName: string,
  isActive: boolean,
  createdAt: string,
  modifiedAt: boolean,
}

export type QuestionPartOneType = {
  id: number,
  mp3Link: string,
  image: string,
  answer: string[],
  rightAnswer: number,
  selectedAnswer?: number,
}
