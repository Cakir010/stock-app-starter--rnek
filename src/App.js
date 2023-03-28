
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store , {persistor} from './app/store'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
     <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
           <Login/>
        </PersistGate>
        </Provider>
     
    </div>
  )
}

export default App