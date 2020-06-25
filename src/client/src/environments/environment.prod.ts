const hostAddress = '';
export const environment = {
  production: true,
  hostAddress: `${hostAddress}/api`,
  auth: {
    endpoint: {
      login: `${hostAddress}/oauth/token`,
      signup: `${hostAddress}/api/signup`,
      userDetails: `${hostAddress}/api/me`
    },
    clientId: 'scheduler-my-awesome-id',
    clientSecret: 'scheduler-my-super-secret-key',
    grantType: 'password'
  }
};
