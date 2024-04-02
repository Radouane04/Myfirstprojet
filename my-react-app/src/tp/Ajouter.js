import React , {useState} from 'react';
import { Link } from "react-router-dom";
import { addArticles } from './Actions';
import { useDispatch , useSelector} from 'react-redux';


function Ajouter(){
    const [articleInfo , setArticleInfo] =useState({})
    const [err , setErr] = useState(false)
    const dispatch = useDispatch()
    const liste = useSelector((state)=>state.Articless)
    // function to handel each article information from ajouter article component
    function handelArticalesChange(e){
        const {name , value}=e.target ;
        const val = name === 'id' || name === 'annee' ? parseInt(value) : name === 'img'? value.slice(12):value
        setArticleInfo(oldInfo => ({...oldInfo , [name]:val}))
    }
    function ajouterArticleHandel(e){
        e.preventDefault();
        // test for empty values
        if(!articleInfo.id || !articleInfo.equipe || !articleInfo.annee || !articleInfo.dex ) return;
        const finalObject = liste.find(a=> a.id == articleInfo.id);
        // check if there is no articles with same id before
        if(finalObject == undefined){
            dispatch(addArticles(articleInfo))
            alert("l'équipe a été ajouter ")
        }else{
            setErr(true)
        }
    }
    return (
        <>
        
            <form onSubmit={(e)=>ajouterArticleHandel(e)} >
                <div className='add p-3 w-75 mx-auto rounded-2 bg-success'>
                    <h4 className='text-center text-dark underline-background-size'>vueillez enter les information de votre équipe </h4>
                    {err && <div className='alert alert-danger text-center mt-3'>Team  Alreday Exists !</div>}  
                    <label className='form-label mt-2 text-white'> Id :</label>
                    <input 
                        className='form-control'
                        type='text'
                        name='id'
                        value={articleInfo.id || ''}
                        onChange={(e)=>handelArticalesChange(e)}
                    />
                    <label className='form-label mt-2 text-white'> Equipe :</label>
                    <input 
                        className='form-control'
                        type='text'
                        name='equipe'
                        value={articleInfo.equipe || ''}
                        onChange={(e)=>handelArticalesChange(e)}
                    />
                    <label className='form-label mt-2 text-white'> Année de creation :</label>
                    <input 
                        className='form-control'
                        type='text'
                        name='annee'
                        value={articleInfo.annee || ''}
                        onChange={(e)=>handelArticalesChange(e)}
                    />
                    <label className='form-label mt-2 text-white'> details equipe : </label>
                    <textarea
                        className='form-control'
                        name='dex'
                        value={articleInfo.dex || ''}
                        onChange={(e)=>handelArticalesChange(e)}
                    />
                    <label className='form-label mt-2 text-white'> Logo de votre équipe : </label>
                     <input 
                        className='form-control mt-3'
                        type='file'
                        name='img'
                        onChange={(e)=>handelArticalesChange(e)}
                    />
                    <input 
                        className='btn  mt-3 w-100 text-white bg-success border border-2 fw-bold fs-0 btn-outline-success '
                        type='submit' 
                        value='Ajouter' 
                    />
                    <Link className='btn btn-info mt-3 text-white p-1 w-25 bg-secondary border-light ' to="/">Retour</Link>
                </div>
             </form>   
        </>
    );
}

export default Ajouter;
