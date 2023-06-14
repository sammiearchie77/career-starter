import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Home from "./pages/home";
import About from './pages/about';
import Features from './pages/features'
import Career from './pages/career';
import Contact from './pages/contact';
import PageError from './pages/pageError';
import Login from './pages/login'
import StudyPath from './pages/studyPath';
import Resources from './pages/resources';


const App = () => {
  return (
    <>
      <Router>
        <div className="bg-gray-100 min-h-screen">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/pages/about' element={<About />} />
            <Route path='/pages/feature' element={<Features />} />
            <Route path='/pages/careers' element={<Career />} />
            <Route path='/pages/study-path' element={<StudyPath />} />
            <Route path='/pages/resources' element={<Resources />} />
            <Route path='/pages/contact' element={<Contact />} />
            <Route path='/pages/login' element={<Login />} />
            <Route path='*' element={<PageError />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;