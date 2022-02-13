import './comp/index.css';
import Navbar from './comp/Navbar';
import Homepage from './comp/Homepage';
import How from './comp/How';
import Create from './comp/Create';
import Polls from './comp/Polls';
import About from './comp/About';
import Signin from './comp/Signin';
import Signup from './comp/Signup';
import Footer from './comp/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/create' component={Create} />
          <Route path='/polls' component={Polls} />
          <Route path='/how' component={How} />
          <Route path='/about' component={About} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
        </Switch>
        {/* <Footer /> */}
      </>

    </Router>
  );
}


export default App;
