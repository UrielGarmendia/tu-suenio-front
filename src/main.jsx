import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Auth0Provider} from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Redux/Store.js';
import {isSafari, isFirefox } from 'react-device-detect'

const isBrave = async()=> {
  return (navigator.brave && await navigator.brave.isBrave() || false)
}

let useRefreshTokens = isSafari || isFirefox || isBrave ? true : false


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    useRefreshTokens={useRefreshTokens}
    cacheLocation={useRefreshTokens ? 'localstorage' : 'memory'}
    domain="dev-higol6lp8oflnbji.us.auth0.com"
    clientId="a8xVvNi2ttwTl0n4NVQtHVFrX7kRnPAi"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    </Auth0Provider>
  </React.StrictMode>,
)
