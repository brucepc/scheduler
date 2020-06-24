// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const hostAddress = 'http://localhost:8080';
export const environment = {
  production: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error'; // Included with Angular CLI.
