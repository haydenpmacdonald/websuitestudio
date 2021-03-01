import './App.css';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import SplashPage from './pages/SplashPage';
import Index from './pages/Index';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

import Hero from './components/Hero';

function App() {
  return (
    <div className="app-container">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={SplashPage} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/home' exact component={Index} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
