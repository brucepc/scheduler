const hostAddress = 'https://piscadela-ecom.appspot.com';
export const environment = {
  production: true,
  hostAddress: `${hostAddress}`,
  auth: {
    endpoint: {
      login: `${hostAddress}/oauth/token`,
      singup: `${hostAddress}/singup`
    },
    clientId: 'scheduler-my-awesome-id',
    clientSecret: 'scheduler-my-super-secret-key',
    grantType: 'password'
  }
};
