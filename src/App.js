import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Home from './Pages/Home';
import TopHeader from './component/TopHeader/TopHeader';
import { Route, Routes } from 'react-router-dom';
import Accessories from './Pages/Accessories/Accessories';
import Laptop from './Pages/Laptop/Laptop';
import Phone from './Pages/Phone/Phone';
import TopBar from './component/TopBar/TopBar';
import Footer from './component/Footer/Footer';
import ChuwiCoreDetails from './Pages/Laptop/ChuwiCore/ChuwiCoreDetails';
import ChuwiFreeDetails from './Pages/Laptop/ChuwiFree/ChuwiFreeDetails';
import ChuwiHeroDetails from './Pages/Laptop/ChuwiHero/ChuwiHeroDetails';
import OnePlus from './Pages/Tv/OnePlus/OnePlus';
import OnePlus43 from './Pages/Tv/OnePlus/OnePlus43';
import OnePlus32 from './Pages/Tv/OnePlus/OnePlus32';
import About from './Pages/About/About';
import Redmi from './Pages/Laptop/Redmi/Redmi';
import GoToTop from './component/GoToTop/GoToTop';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
function App() {
  return (
    <div className="App">
      <TopHeader />
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv/oneplus" element={<OnePlus />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/about" element={<About />} />
        <Route path="/laptop/chuwi" element={<Laptop />} />
        <Route path="/laptop/redmi" element={<Redmi />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/chuwi/chuwi-core" element={<ChuwiCoreDetails />} />
        <Route path="/chuwi/chuwi-free" element={<ChuwiFreeDetails />} />
        <Route path="/chuwi/chuwi-hero" element={<ChuwiHeroDetails />} />
        <Route path="/oneplus/y1g-32" element={<OnePlus32 />} />
        <Route path="/oneplus/y1g-43" element={<OnePlus43 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <GoToTop />
      <Footer />
    </div>
  );
}

export default App;
