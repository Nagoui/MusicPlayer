// import React, { useState } from 'react';
// import { View, Animated, StyleSheet, TouchableOpacity,Text } from 'react-native';

// const AnimatedBox = () => {
//   const [animation] = useState(new Animated.Value(1));

//   const startAnimation = () => {
    
//     Animated.timing(animation, {
//       toValue: 0,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();
//   };

//   return (
//     <View style={styles.container}>
//       <Animated.View
//         style={[
//           styles.box,
//           {
//             opacity: animation,
//             transform: [
//               {
//                 translateY: animation.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [4000, 0],
//                 }),
//               },
//             ],
//           },
//         ]}
//       />
//       <TouchableOpacity style={styles.button} onPress={startAnimation}>
//         <Text style={styles.buttonText}>Start Animation</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     width: 200,
//     height: 200,
//     backgroundColor: 'red',
//   },
//   button: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: 'blue',
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default AnimatedBox;








import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet
} from 'react-native';
import MusicPlayer from './screens/MusicPlayer';


const App=()=>{
  return(
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <MusicPlayer/>
    </View>
  )
}
export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})