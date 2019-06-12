import React, { useEffect } from 'react';
import { getUser } from '../../domain/googleAuth';
import { getHashParams } from '../../helpers/getLocationParams';

interface Props {
  location: { hash: string };
}

export const AuthPage = ({ location }: Props) => {
  //omg creepy
  useEffect(() => {
    (async () => {
      const { access_token: accessToken } = getHashParams(location);
      if (!accessToken) console.log('redirect');
      const { user, userToken } = await getUser(accessToken);
      console.log(user, userToken);
    })();
  }, []);

  return <div>....Loading</div>;
};
