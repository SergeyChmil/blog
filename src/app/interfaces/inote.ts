export interface INoteImage {
  path: string;
  text: string;
  alt_text: string;
}

export interface INote {
  pk: number;
  city: string;
  region: number;
  name: string;
  publication_date: string;
  body: string;
  // shortBody?: string;
  images?: INoteImage[];
}

// export interface IIcons {
//   china: string[],
//   world: string[]
// }

export interface IRegion {
  pk: number;
  name: string;
}

export interface ICity {
  pk: number;
  region: IRegion;
  name: string;
}
