import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const DetailArticleRechercher = () => {
    const {id}=useParams()
    const Article = useSelector((state)=>state.Articless)
    const ArticleRechercher = Article.find(article=>article.id == id);
    return (
        <div className='container'>
            <h1 className='hello--title text-success mb-4'>Detail de l'equipe {ArticleRechercher.id}</h1>
            <div className='card w-50 mx-auto p-4 bg-success text-light '>
                <img className="card-img-top" src={`/img/${ArticleRechercher.img}`} alt="Card image"/>
                <p className='detest'>Equipe : {ArticleRechercher.equipe}</p>
                <p className='detest' >Année : {ArticleRechercher.annee}</p>
                <p  className='detest'>description : {ArticleRechercher.dex}</p>
            <Link className='btn  mt-3 w-100 text-white bg-success border border-2 fw-bold fs-0 btn-outline-success' to='/listArticles'>Retour</Link>
            </div>
        </div>
    );
}
export default DetailArticleRechercher;
