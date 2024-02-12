import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './com/Navbar/header';

import Main from './com/Maincop/main';
import Image from './com/img/image';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Header/>
     <Main/>
     <Image/>

    </>

  
  </React.StrictMode>
);


