import { getHashParams } from './getLocationParams';

it('get params from location object', () => {
  const location = {
    key: 'ac3df4', // not with HashHistory!
    pathname: '/somewhere',
    search: '?some=search-string',
    hash: '#supermen=clarkkent',
    state: { fromDashboard: true }
  };
  expect(getHashParams(location)).toEqual({ supermen: 'clarkkent' });
});
