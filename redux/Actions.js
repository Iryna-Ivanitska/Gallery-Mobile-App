export const FAVORITE = "FAVORITE"
export const FETCH_DATA = 'FETCH_DATA'
export const SEARCH_PICTURES = 'SEARCH_PICTURES'


// export const getData = (dataArray) => {
//     return {
//         type: FETCH_DATA,
//         data: dataArray
//     };
// }
export const getData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?albumId=1"
    );
    const json = await response.json();
    const pic = json.map((el) => ({ ...el, isFavorite: false }));
    return {
      type: FETCH_DATA,
      data: pic
    };
  } catch (error) {
    console.error(error);
  }
    
}

export const favoriteToggle = (img) => ({
  type: FAVORITE,
  img: img,
})

export const searchPictures = (text) => ({
  type: SEARCH_PICTURES,
  text: text,
})
