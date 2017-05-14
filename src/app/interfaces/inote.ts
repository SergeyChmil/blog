export interface INoteImage {
  path: string;
  text: string;
  alt_text: string;
}

export interface INote {
  id: number;
  icon: string;
  region: string;
  header: string;
  date: string;
  body: string;
  shortBody?: string;
  images?: INoteImage[];
}

export interface IIcons{
  china: string[],
  world: string[]
}
