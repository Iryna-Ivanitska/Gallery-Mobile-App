import { StyleSheet, View, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { favoriteToggle } from '../redux/Actions';
import { connect } from 'react-redux';


const PictureItem = (props) => {
  return (
    <View style={styles.item}>
      <Image 
        source={{
          uri: props.img.thumbnailUrl,
        }}
        style={{width: '100%', height: 150}}
      />
      <View style={styles.info}>
        <Text>{props.img.title}</Text>
        <Ionicons 
          name={!props.img.isFavorite ? "heart-outline" : "heart-sharp" }
          size={24} 
          color="black"
          onPress={() => props.favoriteToggle(props.img)}  
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: '80%',
    marginLeft: '10%',
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    padding: 5
  },
  info: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5',
    alignItems: 'center'
  },
});

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => {
  return {
    favoriteToggle: (img) => dispatch(favoriteToggle(img)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PictureItem)