export interface CarDesign {
  id: string;
  description: string;
  playerUName: string;
  bakkesmodCode: string;
  imageUrls: string[];
  items: {
    body: string;
    decal: string;
    wheels: string;
    boost: string;
    trail: string;
  };
  createdAt: string;
}