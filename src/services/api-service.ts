import config from '../config';

const { serverAddress } = config;

type CollectionNameToTypeMap = {
  cups: Cup[],
  categories: Category[];
  materialTypes: MaterialType[];
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
