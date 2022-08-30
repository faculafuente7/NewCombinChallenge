import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Table from './components/Table/Table';

//Redux
import store, { persistor } from './redux/store';
import { Provider } from 'react-redux'
import { loadUsers } from './config/functions';
import { PersistGate } from 'redux-persist/integration/react';

function App() {


  useEffect(() => {
    loadUsers()
  }, [])


  return (
    <Provider store={store} >
      <PersistGate persistor={persistor}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Form />} />
            <Route exact path="/table" element={<Table />} />
          </Routes>
          <Footer />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
