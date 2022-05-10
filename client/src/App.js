import './App.css';


import CountryDetail from './components/home/countries/CountryDetail';

import AddActivity from './components/home/activity/addActivity/AddActivity.jsx';
import LandingPage from './components/landingPage/LandingPage'
import Home from './components/home/home/home/Home'
import {Route} from 'react-router-dom';

import NavBar from './components/home/navBar/navBar/NavBar.jsx';
function App() {
  return (
    <div className="App">
      
      <Route exact path={'/'}>
      <LandingPage/>
      </Route>

      <Route path={'/home'}>
      <NavBar/>
      </Route>

      <Route exact path={'/home/'}>
      <Home/>
      </Route>

      

      <Route exact path={'/home/activity'}>
      <AddActivity/>
      
      </Route>
      <Route exact path={'/home/country/:id'}>
      <CountryDetail/>
      </Route>
      

    </div>
  );
}

export default App;
