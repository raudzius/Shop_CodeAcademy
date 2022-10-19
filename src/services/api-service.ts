import config from '../config';

const { serverAddress } = config;

export type Cup = {
  id: string,
  title: string,
  description: string,
  images?: string[],
  liked: boolean,
  price: number,
  categoryId: string,
  materialTypeId: string,
  colorId: string;
};

type Category = {};
type Product = {};

type CollectionNameToTypeMap = {
  cups: Cup[],
  categories: Category[];
  products: Product[];
};

type CollectionName = keyof CollectionNameToTypeMap;

type ReturnType<T extends CollectionName> = CollectionNameToTypeMap[T];

const fetchMany = async <T extends CollectionName>(collectionName: T): Promise<ReturnType<T>> => {
  const response = await fetch(`${serverAddress}/${collectionName}`);
  const fetchedCups = await response.json();
  return fetchedCups as ReturnType<T>;
};

const ApiService = {
  fetchMany,
};

export default ApiService;
