import { Provider } from 'react-redux';
import Navbar from './Components/Navbar';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Navbar/>
      </PersistGate>
    </Provider>
  );
}

export default App;
