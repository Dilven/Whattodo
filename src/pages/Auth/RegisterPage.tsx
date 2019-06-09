import React from 'react';
import { authLink } from '../../helpers/googleAuth';

export const RegisterPage = () => {
  return (
    <div>
      <a href={authLink}>Zaloguj się</a>
    </div>
  );
};
