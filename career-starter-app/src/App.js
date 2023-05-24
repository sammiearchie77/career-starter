import { 
  BrowserRouter as Router,
  Route, 
  Routes,
} from 'react-router-dom'
import Home from "./pages/home";
import About from './pages/about';
import Features from './pages/features'
import Careers from './pages/careers';
import Contact from './pages/contact';
import PageError from './pages/pageError';
const App = () => {
  return (
    <>
      <Router>
        <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='feature' element={<Features />} />
          <Route path='careers' element={<Careers />}/>
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<PageError />} />
        </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;