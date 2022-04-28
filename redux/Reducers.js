import { FAVORITE, FETCH_DATA, SEARCH_PICTURES } from "./Actions"

const initialState = {
  pictures: [],
  loaded: false,
  searchText: '',
  filteredArray: [],
  favorites: []
}

const PictureReducer = (state = initialState, action) => {
  switch (action.type) { 
    case FAVORITE: {
      return {
        ...state,
        pictures: state.pictures.map( pic => pic.id === action.img.id ? {...pic, isFavorite: !pic.isFavorite} : pic),
        filteredArray: state.filteredArray.map( pic => pic.id === action.img.id ? {...pic, isFavorite: !pic.isFavorite} : pic),
      };
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
        filteredArray: state.pictures.filter((el) => el.title.includes(action.text))
      }  
    }
    default: return state
  } 
}

export default PictureReducer;