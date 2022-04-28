import { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import PictureItem from "../components/PictureItem";
import Search from "../components/search";
import { favoriteToggle, getData } from "../redux/Actions";

const Pictures = (props) => {

  const getPictures = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?albumId=1"
      );
      const json = await response.json();
      const pic = json.map((el) => ({ ...el, isFavorite: false }));
      props.getData(pic);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPictures();
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
    getData: (data) => dispatch(getData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pictures);
