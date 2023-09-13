import { HashRouter , Routes , Route } from "react-router-dom";

import NavBar from './components/NavBar/NavBar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import NotFound from './pages/notFound/NotFound'
import Trainers from './pages/trainers/Trainers'
import Plans from './pages/plans/Plans'
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <HashRouter >
        <NavBar/>
        <Routes>
          <Route index element={<Home/> } />
          <Route path="about" element={<About/> } />
          <Route path="contact" element={<Contact/> } />
          <Route path="gallery" element={<Gallery/> } />
          <Route path="plans" element={<Plans/> } />
          <Route path="trainers" element={<Trainers />} />
          <Route path="*" element={<NotFound/> } />
        </Routes>
        <Footer/>
    </HashRouter>
    </div>
  );
}

export default App;
