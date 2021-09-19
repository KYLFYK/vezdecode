import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { App } from './App'
import { store, persistedStore } from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { I18nextProvider } from 'react-i18next'
import i18next from './lang'

import './index.css'

//

render(
  <Fragment>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <PersistGate persistor={persistedStore} loading={null}>
          <App />
        </PersistGate>
      </Provider>
    </I18nextProvider>
  </Fragment>,
  document.getElementById('root')
)
