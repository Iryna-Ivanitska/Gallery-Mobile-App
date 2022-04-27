import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { Provider } from 'react-redux';
import Tabs from './navigation';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        { store.loaded ? <ActivityIndicator /> : (
          <Tabs/>
        )}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;