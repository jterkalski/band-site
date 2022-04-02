import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import { HashRouter as Router } from 'react-router-dom';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Body />
            </Router>
            <Footer />
        </div>
    );
};

export default App;
