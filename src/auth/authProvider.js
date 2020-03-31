import { MsalAuthProvider, LoginType } from 'react-aad-msal';
 
// TENANTID: '3a19d1c7-8330-4d92-87b8-e4248f629fca'

// Msal Configurations
const config = {
  auth: {
    //authority: 'https://login.microsoftonline.com/common',
    authority: 'https://login.microsoftonline.com/3a19d1c7-8330-4d92-87b8-e4248f629fca',
    clientId: '5ef29908-0f74-417b-8d0f-5da43afa9880',
    redirectUri: 'https://localhost:3000'
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
};
 
// Authentication Parameters
const authenticationParameters = {
  scopes: [
    'user.read',
    //'https://lithiasandbox.onmicrosoft.com/pocketknife-directory-poc/demo.read'
    'https://lithiasandbox.onmicrosoft.com/5ef29908-0f74-417b-8d0f-5da43afa9880/demo.read'
  ]
}
 
// Options
const options = {
  loginType: LoginType.Popup,
  tokenRefreshUri: window.location.origin // + '/auth.html'
}
 
export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)