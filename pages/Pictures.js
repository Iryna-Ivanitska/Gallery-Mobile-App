import { useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import PictureItem from "../components/PictureItem";
import Search from "../components/search";
import { favoriteToggle, getPictures } from "../redux/Actions";

const Pictures = (props) => {

  useEffect(() => {
    getPictures()
  }, []);

  return (
    <>
      <Search />
      <FlatList
        data={props.filteredArray}
        renderItem={({ item }) => (
          <PictureItem img={item} favoriteToggle={props.favoriteToggle} />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
  return {
    favoriteToggle: (img) => dispatch(favoriteToggle(img)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pictures);
