export interface Albums {
  userId: number;
  id: number;
  title: string;
}

export interface Photos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
