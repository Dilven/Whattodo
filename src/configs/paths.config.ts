export const paths = {
  domain:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.REACT_APP_DOMAIN,
  client: {
    login: 'login',
    register: 'register',
    settings: 'settings',
    cafes: 'cafes',
    auth: 'auth'
  },
  api: {}
};
