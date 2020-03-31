import React from 'react'
import { AzureAD, AuthenticationState } from 'react-aad-msal'
import { authProvider } from '../auth/authProvider'

import logo from '../../assets/azure-logo.svg'
import './App.css'

//const UN = 'foo'


export default () => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Azure login</p>
      </header>
      <div className="main">
        <AzureAD provider={authProvider} forceLogin={true}>
  {
    ({login, logout, authenticationState, error, accountInfo}) => {
      switch (authenticationState) {
        case AuthenticationState.Authenticated:
          return (
            <p>
              <span>Welcome, {accountInfo.account.name}!</span>
              <button onClick={logout}>Logout</button>
            </p>
          )
        case AuthenticationState.Unauthenticated:
          return (
            <div>
              <p>
                <span>Non authenticated user</span>
                <button onClick={login}>Login</button>
              </p>
              {error && <p><span>An error occured during authentication, please try again!</span></p>}
            </div>
          )
        case AuthenticationState.InProgress:
          return (<p>Authenticating...</p>)
      }
    }
  }
        </AzureAD>
      </div>
    </div>
  )
}
