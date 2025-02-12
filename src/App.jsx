import './App.css';
import 'react-bootstrap'
// import '@fortawesome/fontawesome-svg-core'
import Home from './componnts/Home';
import Servieses from './componnts/Servieses';
import Skills from './componnts/Skills';
import Projects from './componnts/Projects'
import Projectssss from './componnts/Projectssss'
import Contact from './componnts/Contact';


function App() {
  return (
    <div className="App">
       <Home />
       <Servieses />
       <Skills />
       <Projects />
       <Projectssss />
       <Contact />
    </div>
  );
}

export default App;
