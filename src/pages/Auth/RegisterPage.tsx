import React from 'react';
import { authLink } from '../../domain/googleAuth';

export const RegisterPage = () => {
  return (
    <div>
      <a href={authLink}>Zaloguj się</a>
    </div>
  );
};
