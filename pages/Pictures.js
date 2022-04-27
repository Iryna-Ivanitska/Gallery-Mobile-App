import { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, Text, View } from 'react-native';
import { FlatList } from 'react-native-web';
import { connect } from 'react-redux';
import {PictureItem} from '../components/PictureItem';
import { getData } from '../redux/Actions';

const Pictures = (props) => {
  const [isLoading, setLoading] = useState(true);

  console.log(props)

  const getPictures = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=1');
      const json = await response.json();
      const pic = json.map((el) => ({ ...el, isFavorite: false }));
      props.getData(pic)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  };

 useEffect(() => {
  getPictures();
 }, []);

  return (
    <View >
      { isLoading ? <ActivityIndicator /> : (
          <View>
            <Text>Pictures!</Text>
            <FlatList data={props.pictures} renderItem={ ({item}) =>
              <PictureItem img={item}/>
            }/>
            {/* <Text>{props.pictures[0].title}</Text> */}
          </View>
        )}
    </View>
  );
}

const styles = StyleSheet.create({

});

const mapStateToProps = (state) => {
  return {pictures: state.pictures}
}
const mapDispatchToProps = (dispatch) => {
  return {
    favoriteToggle: (id) => dispatch(favoriteToggle(id)),
    getData: (data) => dispatch(getData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pictures)