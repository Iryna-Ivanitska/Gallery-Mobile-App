import { FAVORITE, FETCH_DATA } from "./Actions"

const initialState = {
  pictures: []
}

const pictureReducer = (state = initialState, action) => {
  switch (action.type) { 
    case FAVORITE: {
      console.log(action.id)
      return;
    }
    case FETCH_DATA: {
      console.log(action.data)
      return {
        ...state,
        pictures: action.data
      }
    }
    default: return state
  } 
}

export default pictureReducer;