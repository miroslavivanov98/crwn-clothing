import './App.css';

import {Route ,Switch, Link} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
    {/* <button onClick={() => props.history.push('/')}>Home</button>
    <Link to='/'>Home</Link> */}
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
