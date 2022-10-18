import config from '../config';

const collectionName = 'cups';
const { serverAddress } = config;

const fetchMany = async () => {
  const response = await fetch(`${serverAddress}/${collectionName}`);
  const fetchedCups = await response.json();
  return fetchedCups;
};

const cupService = {
  fetchMany,
};

export default cupService;
