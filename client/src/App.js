import './App.css';
import AllCards from './components/AllCards'
import CountryDetail from './components/CountryDetail';
import Search from './components/Search';
import AddActivity from './components/AddActivity';
import {Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1>Henry Countries</h1>
      <Route exact path={'/search'}>
      <Search/>
      </Route>
      <Route exact path={'/activity'}>
      <AddActivity/>
      </Route>
      <Route exact path={'/countries'}>
      <AllCards/>
      </Route>
      <Route exact path={'/countries/:id'}>
      <CountryDetail/>
      </Route>
      

    </div>
  );
}

export default App;
