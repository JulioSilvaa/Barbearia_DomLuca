import './App.css';
import Footer from './components/footer/Footer';


import Header from './components/header/Header';
import Map from './components/map/Map';
// import Dashboard from './pages/dashboard/Dashboard'
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Map />
      <Footer />

    </>
  );
}

export default App;
