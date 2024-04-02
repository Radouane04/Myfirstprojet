import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        
        <div className='link1'>
                <Link   to='/'>Acceuil</Link>
                <Link   to='/Ajouter'>Participer</Link>
                <Link   to='/listArticles'>Liste des Equipe</Link>
                <Link   to='/Reglement'>Reglement</Link>
        </div>
    );
}
export default Navigation;

// function Box({value ,path}){
//     return(
//         <div 
//                 className='d-flex justify-content-center align-items-center m-4 p-4 bg-primary w-75 mx-auto rounded-2 '
//                 style={{height:'100px',}}
//         >
//                 <Link className='h2 text-decoration-none text-dark' to={path}>{value}</Link>
//         </div>
//     )
// }