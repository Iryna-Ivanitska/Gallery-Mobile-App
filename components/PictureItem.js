import { StyleSheet, View, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export const PictureItem = ({img}) => {
  return (
    <View style={styles.item}>
      <Image 
        source={{
          uri: img.thumbnailUrl,
        }}
        style={{width: '100%', height: 150}}
      />
      <View style={styles.info}>
        <Text>{img.title}</Text>
        <Ionicons name="heart-outline" size={24} color="black"/>
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
