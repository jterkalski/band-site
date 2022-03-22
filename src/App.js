import './App.scss';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';
import Body from './Components/Body';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Body />
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
