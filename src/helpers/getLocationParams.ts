import qs from 'qs';
import { LocationState } from 'history';

export const getHashParams = (location: LocationState) => {
  console.log(location);
  const { hash } = location;
  const hashParams = qs.parse(hash.slice(1));
  return hashParams;
};
