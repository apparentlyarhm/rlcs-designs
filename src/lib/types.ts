export interface CarDesign {
  id: string;
  description: string;
  player: {
    name: string,
    x_link: string
  }
  bakkesmodCode: string;
  imageUrls: string[];
  items: {
    body: string;
    decal: string;
    wheels: string;
    boost: string;
    trail: string;
  };
  createdAt: number;
}

export interface CarDesignSearchItem {
  id: string;
  description: string;
  player: {
    name: string,
  }
  image: string;
  bakkesmod: string;
}