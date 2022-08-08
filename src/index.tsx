import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Notfound } from './pages/notfound';
import './styles/index.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  

<BrowserRouter>
        <Routes>
            {/* <Route path='/' element={< Homepage/>} />
            <Route path='/login' element={< Loginpage/>} />
            <Route path='/register' element={< RegisterPage/>} />
            <Route path='/profile' element={< Profilepage/>} />
            <Route path='/prodcast' element={< Prodcastpage/>} />
            <Route path='/library' element={< Librarypage/>} />
            <Route path='/content/1' element={< Contentonepage />} />
            <Route path='/content/2' element={< Contentonepage1/>} />
            <Route path='/content/3' element={< Contentonepage2/>} />
            <Route path='/content/4' element={< Contentonepage3/>} />
            <Route path='/content/5' element={< Contentonepage4/>} />
            <Route path='/content/6' element={< Contentonepage5/>} />
            <Route path='/content/8' element={< Contentonepage7/>} />
            <Route path='/content/9' element={< Contentonepage8/>} /> */}
            <Route path='/*' element={<Notfound />} />
        </Routes>  
    </BrowserRouter>
  </React.StrictMode>
);

