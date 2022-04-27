import { FAVORITE, FETCH_DATA, SEARCH_PICTURES } from "./Actions"

const initialState = {
  pictures: [],
  loaded: false,
  searchText: '',
  filteredArray: []
}

const PictureReducer = (state = initialState, action) => {
  switch (action.type) { 
    case FAVORITE: {
      console.log(action.id)
      return;
    }
    case FETCH_DATA: {
      return {
        ...state,
        pictures: action.data,
        filteredArray: action.data,
        loaded: true
      }
    }
    case SEARCH_PICTURES: {
      return {
        ...state,
        filteredArray: state.pictures.filter( el => el.title.includes(action.text))
      }  
    }
    default: return state
  } 
}

export default PictureReducer;