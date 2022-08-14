import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Notfound } from './pages/notfound';
import {Registerpage} from './pages/register';
import "primereact/resources/themes/saga-orange/theme.css";  //theme
// import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { Loginpage } from './pages/login';



import './styles/register.css';
import './styles/login.css';
import './styles/navbar.css';
import './styles/home.css';
import './styles/mybook.css';
import './styles/rivew.css';
import './styles/news.css';
import { Homepage } from './pages/home';
import { Mybookpage } from './pages/mybook';
import { Writecomment, Writecomment2, Writecomment3, Writecomment4, Writecomment5, Writecomment6, Writecomment7 } from './pages/view';
import { Newspage } from './pages/news';


// function Index() {
//      return <h2>Home</h2>;
//    }

// function Product({ match }) {
//  return <h2>This is a page for product with ID: {match.params.id} </h2>;
//    }

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
<BrowserRouter>
        <Routes>
               <Route path='/rivews/1000' element={< Writecomment/>} />
               <Route path='/rivews/1001' element={< Writecomment2/>} />
               <Route path='/rivews/1002' element={< Writecomment3/>} />
               <Route path='/rivews/1003' element={< Writecomment4/>} />
               <Route path='/rivews/1004' element={< Writecomment5/>} />
               <Route path='/rivews/1005' element={< Writecomment6/>} />
               <Route path='/rivews/1006' element={< Writecomment7/>} />
               <Route path='/news' element={<Newspage />} />
                <Route path='/mybook' element={< Mybookpage/>} />
                <Route path='/home' element={< Homepage/>} />
                <Route path='/login' element={< Loginpage/>} />
                <Route path='/' element={<Registerpage/>} />
               <Route path='/*' element={<Notfound />} />
        </Routes>  
    </BrowserRouter>
  </React.StrictMode>
);

