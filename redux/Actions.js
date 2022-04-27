export const FAVORITE = "FAVORITE"
export const FETCH_DATA = 'FETCH_DATA'
export const SEARCH_PICTURES = 'SEARCH_PICTURES'


export const getData = (dataArray) => {
    return {
        type: FETCH_DATA,
        data: dataArray
    };
}

export const favoriteToggle = (id) => ({
  type: CHANGE_BY_AMOUNT,
  id: id,
})

export const searchPictures = (text) => ({
  type: SEARCH_PICTURES,
  text: text,
})
