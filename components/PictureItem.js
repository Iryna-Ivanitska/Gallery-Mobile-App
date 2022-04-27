import { StyleSheet, View, Image } from 'react-native';


export const PictureItem = ({img}) => {
  console.log(img)
  return (
    <View style={styles.container}>
      <Image 
        source={{
          uri: img.thumbnailUrl,
          width: 150,
          height: 150
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
