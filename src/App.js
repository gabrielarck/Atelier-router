import React from 'react';
import './App.css';
import {Switch , Route, Link} from 'react-router-dom';
import HomePage from './component/Home/HomePage';
import HtmlPage from './component/Html/HtmlPage';
import CssPage from './component/Css/CssPage';
import JsPage from './component/Js/JsPage';
import Header from './component/Header/Header';


function App() {
  return (
    <div >
      <Header />
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/HtmlPage" component={HtmlPage}/>
      <Route path="/CssPage" component={CssPage}/>
      <Route path="/JsPage" component={JsPage}/>
      </Switch>
    </div>
  );
}

export default App;
