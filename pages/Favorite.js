import { StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PictureItem from '../components/PictureItem';
import { favoriteToggle } from '../redux/Actions';

function Favorite(props) {
  let arr = props.pictures.filter(pic => pic.isFavorite)
  return (
      <FlatList data={arr} renderItem={ ({item}) =>
        <PictureItem img={item}/>
      }/>
  );
}

const styles = StyleSheet.create({

});

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => {
  return {
    favoriteToggle: (img) => dispatch(favoriteToggle(img)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite)