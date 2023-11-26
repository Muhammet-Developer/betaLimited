import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import HomeView from './views/HomeView';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HomeView />
      </PersistGate>
    </Provider>
  );
}

export default App;
