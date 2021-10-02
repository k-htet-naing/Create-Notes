import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './Components/Notes';
import CreateNotes from './Components/CreateNotes';
import Layout from './container/Layout';
import Appbar from './Appbar';

const title = "Hello Pikachu"
function App() {
  return (
    <Router>
      <Layout>
         <Switch>
             <Route exact path ='/'>
               <Notes />
             </Route>
             <Route exact path ='/create'>
               <CreateNotes />
             </Route>
         </Switch>
      </Layout>
    </Router>
  );
}

export default App;
