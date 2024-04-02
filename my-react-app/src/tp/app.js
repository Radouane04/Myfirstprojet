import React, { useState } from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Login from './login';
import Home from './Home';
import Ajouter from './Ajouter';
import ListeArticles from './ListeArticles';
import DetailArticle from './DetailArticle';
import ModifierArticles from './modifierarticles';
import Reglement from './Reglement';
import './style.css'
import { Provider } from 'react-redux';
import store from './Store';

function App (){
    const [isAdmin , setIsadmin]=useState(false)
    return (
        <div className=''>
            <Provider store={store}>
                {
                    isAdmin?
                    <Router>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/Ajouter' element={<Ajouter/>}/>
                        <Route path='/listArticles' element={<ListeArticles />}/>
                        <Route path='/Reglement' element={<Reglement />}/>
                        <Route path='/modifier/:id' element={<ModifierArticles/>}/>
                        <Route path='/details/:id' element={<DetailArticle/>}/>
                    </Routes>
                    </Router> 
                    : 
                    <Login setIsadmin={setIsadmin} /> 
                } 
            </Provider>
        </div>
    );
}
export default App;
