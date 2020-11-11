import React from "react";
import {useLocation} from 'react-router-dom';

function Header(props) {
  const location = useLocation();
  return (<header className="App-header px-2">
    <a href={location.pathname}><small className="text-muted">{location.pathname}</small></a>
  </header>);
}

export default Header;
