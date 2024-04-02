import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { delArticle } from './Actions';

const ListeArticles = ({setArticles}) => {
    const myArticles = useSelector((state)=>state.Articless)
    const dispatch = useDispatch();
    // function to delete item
    // function deleteArticle(id){
    //     // const filtredArticles = myArticles.filter(article=> article.id != id)
    //     // setArticles(filtredArticles)
    //     dispatch(delArticle(id))
    //     console.log(id)
    // }
    return (
        <div className='container p-3 list--article'>
            <h3 className='text-center bg-success p-2 item--count'>Nombre Des equipe qui vont participer : {myArticles.length}</h3>
            <div className='row'>
                {
                    myArticles.map(a=>(
                        <div key={a.id} className='col-lg-4 col-md-6 col-sm-12'>
                           <div className="card m-3 mx-auto" id='card' style={{width:'300px'}}>
                            <img className="card-img-top" src={`/img/${a.img}`} alt="Card image"/>
                                <div className="card-body">
                                    <div className='mb-2'><div className='article--info'>ID </div>:  {a.id}</div>
                                    <div className='mb-2'><div className='article--info'>Equipe</div>:  {a.equipe}</div>
                                    <div className='mb-2'><div className='article--info'>Année de creation</div>:  {a.annee}</div>
                                    <Link className='btn btn-primary mx-2 mt-3' to={`/details/${a.id}`}>Detail</Link>
                                    <Link className='btn btn-success mx-2 mt-3' to={`/modifier/${a.id}`}>Modifier</Link>
                                    <button onClick={()=>dispatch(delArticle(a.id))} className='btn btn-danger mx-2 mt-3' >Suprimer</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Link className='btn btn-info m-3 text-white bg-success' to='/'>Retour</Link>
            <Link className='btn btn-info m-3 text-white bg-success' to='/Ajouter'>Ajouter une équipe</Link>
        </div>
    );
}
export default ListeArticles;

