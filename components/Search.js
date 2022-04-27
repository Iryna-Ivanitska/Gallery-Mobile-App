
import { StyleSheet, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { searchPictures } from '../redux/Actions';

function Search(props) {
  console.log(props.filteredArray)
  return (
    <View >
      <TextInput 
        style={styles.input} 
        placeholder='Search...' 
        onChangeText={(value) => props.search(value)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    marginLeft: '10%',
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 15,
    marginBottom: 15,
  }
});

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => {
  return {
    search: (text) => dispatch(searchPictures(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)