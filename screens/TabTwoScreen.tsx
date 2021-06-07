import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList,Image, Dimensions, ImageBackground } from 'react-native';
import { Avatar, Card, IconButton, Paragraph, Title } from 'react-native-paper';
// import { BlurView } from 'expo-blur';

import Animated, {
  useSharedValue,
  useAnimatedProps,
} from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';
const FlatListAnything = (props)=> <FlatList {...props} />

const RightPanel = (props)=>{
  const {icons} = props
  return(
    <View style={{
      flex:0.5
      ,justifyContent:'space-evenly',
      alignItems:'flex-end',
      marginBottom:15
    }}>
{      icons.map(( item,index)=>{
        return (<IconButton icon={item.icon} color="red" size={44} />)
      })}
    </View>
  )
}

const Sticker = ()=>{
  const radius = useSharedValue(50);

  
  return(
    <Svg>
    {/* <AnimatedPath animatedProps={animatedProps} fill="black" /> */}
  </Svg>
  )
}


const PriceInfo = (props)=>{
    return (
      <View style={{flex:1}}>
      <Card >
        <Card.Title title="Hello World" right={()=><Avatar.Image size={24} source={{uri:'https://pbs.twimg.com/profile_images/1366466342354751491/JyhZpbtu_400x400.jpg'}}   />}  />
        {/* <Card.Content>
        <Paragraph>  Hello world i really think its time to reavel </Paragraph>
        </Card.Content> */}

      </Card>
      </View>
    )
}


const Item = (props)=>{
  // const radius = useSharedValue(50);

  // const animatedProps = useAnimatedProps(() => {
  //   // draw a circle
  //   const path = `
  //   M 100, 100
  //   m -${radius.value}, 0
  //   a ${radius.value},${radius.value} 0 1,0 ${radius.value * 2},0
  //   a ${radius.value},${radius.value} 0 1,0 ${-radius.value * 2},0
  //   `;
  //   return {
  //     d: path,
  //   };
  // });
  const {width,height} = Dimensions.get('screen')
    return(
      <View style={{ flex: 1,alignItems:'flex-end' }}>

      {/* <View style={styles.container}> */}
      <ImageBackground style={{flex:1,height,width,justifyContent:'center',alignItems:'flex-end'}}  source={{uri:'https://pbs.twimg.com/profile_images/1366466342354751491/JyhZpbtu_400x400.jpg'}} resizeMode="cover" >
        <RightPanel icons={[{icon:'heart'},{icon:'star'},{icon:'message'}]} />
        {/* Adjust the tint and intensity */}
        {/* <BlurView intensity={20} style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}> */}
          {/* <Text>Hello! I am bluring contents underneath</Text> */}
          {/* <PriceInfo /> */}

        {/* </BlurView> */}
        <Sticker/>
            </ImageBackground>

      {/* </View> */}
    
    </View>
    )
}



const EmptyComponent =(props)=>{
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Title >Hello</Title>
    </View>
  )
}

export default function App() {
    const radius = useSharedValue(50);

  const animatedProps = useAnimatedProps(() => {
    // draw a circle
    const path = `
    M 100, 100
    m -${radius.value}, 0
    a ${radius.value},${radius.value} 0 1,0 ${radius.value * 2},0
    a ${radius.value},${radius.value} 0 1,0 ${-radius.value * 2},0
    `;
    return {
      d: path,
    };
  });
  return (
  
    // <View style={styles.container}>
      <FlatList pagingEnabled={true} data={[{index:1},{index:3}]} keyExtractor={(item,index)=>`${index}`} renderItem={({item})=>(<Item {...item} />)} ListEmptyComponent={(props)=><EmptyComponent />} />
      // {/* <Text>Open up App.js to start working on your app!</Text> */}
     // <StatusBar style="auto" />
    // </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
