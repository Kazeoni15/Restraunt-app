import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from './pages/Cart';
import CartPage from './pages/CartPage';
import Home from "./pages/Home";
import Orders from './pages/Orders';
import RestrauntPage from './pages/RestrauntPage';
import SearchRequest from './pages/SearchRequest';
import SearchResult from './pages/SearchResults';




export default function App(){
    return(
        <div>
            <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/restraunts/:RestrauntID" exact component={RestrauntPage} />
                <Route path="/Search" exact component={SearchRequest}/>
                <Route path="/searchResults/:req" exact component = {SearchResult} />
                <Route path="/cart" exact component = {Cart} />
                <Route path="/cart/cartID/:ID" exact component={CartPage} />
                <Route path="/orders" exact component={Orders}/>
            </Switch>




            </Router>
        </div>
    )
}