import './App.css';


import CountryDetail from './components/home/CountryDetail';
import Search from './components/home/Search';
import AddActivity from './components/home/AddActivity';
import LandingPage from './components/landingPage/LandingPage'
import Home from './components/home/Home'
import {Route} from 'react-router-dom';

import NavBar from './components/home/NavBar';
function App() {
  return (
    <div className="App">
      
      <Route exact path={'/'}>
      <LandingPage/>
      </Route>

      <Route exact path={'/home'}>
      <Home/>
      </Route>

      <Route path={'/home'}>
      <NavBar/>
      </Route>

      <Route exact path={'/search'}>
      <Search/>
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
