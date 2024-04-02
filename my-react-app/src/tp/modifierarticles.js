import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateArticle } from './Actions';

const ModifierArticles = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.Articless);
    const articleToEdit = articles.find((article) => article.id == id);

    const [editedArticle, setEditedArticle] = useState({});

    useEffect(() => {
        setEditedArticle(articleToEdit);
    }, [articleToEdit]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedArticle((prevArticle) => ({ ...prevArticle, [name]: value }));
    };

    // Handle image file change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setEditedArticle((prevArticle) => ({ ...prevArticle, img: file.name }));
    };

    const handleEditSubmit = () => {
        dispatch(updateArticle(editedArticle));
        alert("Modification reussite")
    };

    return (
        <div className=''>
            <h1 className='hello--title text-secondary  mb-1'>Modifier l'équipe {articleToEdit.id}</h1>
            <div className='card w-50 mx-auto p-4 bg-success text-light'>
                
                <form>
                    <img className="card-img-top" src={`/img/${articleToEdit.img}`} alt="Card image" />
                    
                    {/* Input for image file */}
                    <label htmlFor='image'>Modifier Image:</label>
                    <input
                        className='form-control'
                        type='file'
                        id='image'
                        name='image'
                        onChange={handleImageChange}
                    />
                    
                    {/* Other input fields */}
                    <label htmlFor='equipe'>Nom equipe:</label>
                    <input
                        className='form-control'
                        type='text'
                        id='equipe'
                        name='equipe'
                        value={editedArticle.equipe}
                        onChange={handleInputChange}
                    />
                    <br />

                    <label htmlFor='annee'>Annee de creation:</label>
                    <input
                        className='form-control'
                        type='text'
                        id='annee'
                        name='annee'
                        value={editedArticle.annee}
                        onChange={handleInputChange}
                    />
                    <br />

                    <label htmlFor='dex'>Description:</label>
                    <input
                        className='form-control'
                        type='text'
                        id='dex'
                        name='dex'
                        value={editedArticle.dex}
                        onChange={handleInputChange}
                    />
                    
                    {/* Style the button like a link and position it accordingly */}
                    <button type='button' className='btn  mt-3 w-100 text-white bg-success border border-2 fw-bold fs-0 btn-outline-success' onClick={handleEditSubmit}>
                        Valider
                    </button>
                </form>
                
                {/* Keep the link with its original class and position */}
                <Link className='btn btn-info mt-3 text-white p-1 w-25 bg-secondary border-light' to='/listArticles'>
                    Retour
                </Link>
            </div>
        </div>
    );
};

export default ModifierArticles;
