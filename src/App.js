
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store , {persistor} from './app/store'
import Login from './pages/Login'
import AppRouter from './router/AppRouter'

const App = () => {
  return (
    <div>
     <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
           <AppRouter/>
        </PersistGate>
        </Provider>
     
    </div>
  )
}

export default App