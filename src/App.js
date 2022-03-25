import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Features from './components/Features/Features';
import Boost from './components/Boost/Boost';
import Review from './components/Review/Review';
import Support from './components/Support/Support';
import Tutorial from './components/Tutorial/Tutorial';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <div className='space'>
       <LandingPage/>
       <Features />
       <Boost />
       <Review />
       <Support />
       <Tutorial />
       <Footer />
     </div>
      </div>
  );
}

export default App;
