import {Switch, Route} from 'react-router-dom'
import NotFound from './components/NotFound'
import HomePage from './components/HomePage'
import ProductDetailsPage from './components/ProductDetailsPage'
import Navbar from './components/Navbar'
import './App.css'

const App = () => (
  <>
    <Navbar />
    <hr />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/product/:id" component={ProductDetailsPage} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
