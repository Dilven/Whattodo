import qs from 'qs';

export const getHashParams = (location: { hash: string }) => {
  const { hash } = location;
  const hashParams = qs.parse(hash.slice(1));
  return hashParams;
};
