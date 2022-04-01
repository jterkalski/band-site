import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

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
