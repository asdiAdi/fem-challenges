// TODO: Real backend api and axios integration

export type DataType = {
  id: string;
  title: string;
  thumbnail: string;
};

const data: DataType[] = [
  {
    id: "0001",
    title: "Product Preview Card Component",
    thumbnail: "product-preview-card-component.jpg",
  },
];

export const initDataType: DataType[] = [];
export const getChallenges = async (): Promise<DataType[]> => {
  return new Promise((resolve) => {
    resolve(data);
  });
};
