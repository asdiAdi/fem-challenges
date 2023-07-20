// TODO: Real backend api and axios integration

export type Challenge = {
  id: string;
  title: string;
  thumbnail: string;
  badges: string[];
};

export const tempData: Challenge[] = [
  {
    id: "0001",
    title: "Product Preview Card Component",
    thumbnail: "product-preview-card-component.jpg",
    badges: ["HTML", "CSS"],
  },
];

export const getChallenges = async (): Promise<Challenge[]> => {
  return new Promise((resolve) => {
    resolve(tempData);
  });
};
