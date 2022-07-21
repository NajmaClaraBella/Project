import './App.css';
import Navbar from './Components/Navbar';
import BodyComponent from './Components/BodyComponent';
import FooterComponent from './Components/FooterComponent';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Navbar />
      <BodyComponent />
      <FooterComponent />
    </Fragment>
  );
}

export default App;
