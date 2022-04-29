export const FAVORITE = "FAVORITE"
export const FETCH_DATA = 'FETCH_DATA'
export const SEARCH_PICTURES = 'SEARCH_PICTURES'

export const getPictures = () => {
  fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
   .then(response => response.json())
   .then (pic => pic.map((el) => ({ ...el, isFavorite: false })))
   .then( pic => getData(pic));
};

export const getData = (dataArray) => {
    return {
        type: FETCH_DATA,
        data: dataArray
    };
}

export const favoriteToggle = (img) => ({
  type: FAVORITE,
  img: img,
})

export const searchPictures = (text) => ({
  type: SEARCH_PICTURES,
  text: text,
})
