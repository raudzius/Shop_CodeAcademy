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

// Should be done on server side
const fetchCupPriceRange = async (): Promise<NumberRange> => {
  const sortedPrices = (await fetchMany('cups')).map((cup) => cup.price).sort((a, b) => a - b);

  return [sortedPrices[0], sortedPrices[sortedPrices.length - 1]];
};
//

const ApiService = {
  fetchMany,
  fetchCupPriceRange,
};

export default ApiService;
