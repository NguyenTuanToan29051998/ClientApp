export type Menu = {
  menuName: string,
  menuUrl: string,
  englishName: string,
  subMenus:
    {
      name: string,
      url: string,
    }[]
}
