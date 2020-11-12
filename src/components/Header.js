import React from "react";
import {useLocation, Link} from 'react-router-dom';

function Header(props) {
  const location = useLocation();
  return (<header className="App-header px-2">
    <Link to={location.pathname}>
      <small className="text-muted">{location.pathname}</small>
    </Link>
  </header>);
}

export default Header;
