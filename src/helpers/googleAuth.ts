import { paths } from '../configs/paths.config';
import qs from 'qs';

const options = {
  scope: 'https://www.googleapis.com/auth/userinfo.email',
  include_granted_scopes: true,
  state: 'state_parameter_passthrough_value',
  redirect_uri: `${paths.domain}/${paths.client.auth}`,
  response_type: 'token',
  client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID
};

const params = Object.entries(options).reduce(
  (acc, [key, value]) => acc + `&${key}=${value}`,
  ''
);

export const authLink = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;

export const getAccessTokenFromLocation = (location: { hash: string }) => {
  const { hash } = location;
  const hashParams = qs.parse(hash.slice(1));
  return hashParams.access_token;
};

export const getUser = async (accessToken: string) => {
  const config = {
    headers: { Authorization: 'Bearer ' + accessToken }
  };
  console.log(config);
  // const { data: { user, token: userToken } } = await axios.post(paths.api.authGoogle, {}, config)
  return {
    user: 'User',
    userToken: 'UserToken'
  };
};
