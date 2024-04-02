import { Articless } from "./Articles"
const initialState = {Articless:Articless} ;

export default function articlesReducer(state=initialState , action){
    switch (action.type){
        case 'DELETE_ARTICLES':
            return {...state , Articless:state.Articless.filter(a=>a.id !== action.payload)}
        case 'AJOUTER_ARTICLES':
            return {...state , Articless:[...state.Articless , action.payload]}
        case 'UPDATE_ARTICLE':
            const updatedArticless = state.Articless.map((article) =>
        article.id === action.payload.id ? action.payload : article
      );
      return {
        ...state,
        Articless: updatedArticless,
      };

            default:
            return state;
    }
}