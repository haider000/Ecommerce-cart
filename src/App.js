import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Loading from './Components/Loading';
import './App.css';

// Dynamic Imports
const Products = React.lazy(() => import('./Pages/Products/Products'));

const About = React.lazy(() => import('./Pages/About/About'));

const Cart = React.lazy(() => import('./Pages/Cart/Cart'));

const ProductDetails = React.lazy(() =>
  import('./Pages/ProductDetails/ProductDetails')
);

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Toaster position="top-right" />
        <Switch>
          <Suspense fallback={<Loading />}>
            <Route exact path="/" component={Products} />
            <Route exact path="/Products/:id" component={ProductDetails} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Cart" component={Cart} />
          </Suspense>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
