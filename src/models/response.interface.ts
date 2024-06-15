export interface IResponse {
  episodes: Episode[];
  shortcast: Episode[];
}

interface Episode {
  title: string;
  name: string;
  thumbnail: string;
}
