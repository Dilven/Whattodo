import React, { useEffect } from 'react';
import { getAccessTokenFromLocation, getUser } from '../../helpers/googleAuth';

interface Props {
  location: { hash: string };
}

export const AuthPage = ({ location }: Props) => {
  //omg creepy
  useEffect(() => {
    (async () => {
      const accessToken = getAccessTokenFromLocation(location);
      if (!accessToken) console.log('redirect');
      const { user, userToken } = await getUser(accessToken);
      console.log(user, userToken);
    })();
  }, []);

  return <div>....Loading</div>;
};
