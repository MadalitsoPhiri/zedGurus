import {
  FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    StatusBar,
    Dimensions
  } from 'react-native';
 
 
import React, { FC, useEffect } from 'react';
import {StoreState} from "../redux/store"
import {useSelector,useDispatch} from "react-redux"
import { RandomUser } from '../types/RandomUserType';
import {fetchUsers} from "../redux/slices/randomUsersSlice"
import uuid from 'react-native-uuid';
import UserListItem from './UserListItem';
import * as Progress from 'react-native-progress';
import { NavigationProp } from '@react-navigation/native';




const {width,height} = Dimensions.get("window")
const seed = uuid.v4().toString(); 
const SPACING = 20
const loaderSize = 40
interface UserListProps{
  navigation:any,
}
const UserList = ({ navigation}:UserListProps)=>{
    const dispatch = useDispatch()
    const [onEndReachedCalledDuringMomentum,setOnEndReachedCalledDuringMomentum] = React.useState(true)
    useEffect(()=>{
        dispatch(fetchUsers({page:1,seed}))
    },[])
    const usersState = useSelector((state:StoreState)=>state.randomUsers)
    const handleOnBottomReached = ()=>{
      console.log(usersState.users.length)
     if(!usersState.loading || usersState.users.length < 500){
      if(!onEndReachedCalledDuringMomentum){
         dispatch(fetchUsers({page:usersState.nextPage,seed}))
       
        setOnEndReachedCalledDuringMomentum(true) 
    }
   }
    }
    const styles = StyleSheet.create({
      container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        height:"100%" 
       },
       UserListRoot:{
         flex:1,
         width:"100%",
         height:"100%"
       },
       headingBackground:{
         backgroundColor:"red",
         borderRadius:20,
         paddingVertical:15
       },
       userContainerListStyle:{
        padding:SPACING,
        paddingTop:42
       },
      UsersFlalist:{

        width:"100%",
        height:"100%"
      }
    })
    return( <View style={styles.UserListRoot}>
     <Image source={require('../assets/background.png')}  style={[StyleSheet.absoluteFill,{width:"100%",height:"100%"}]} blurRadius={60}/> 
    {usersState.users.length != 0 ? <View style={styles.container}>
   
    <FlatList
    style = {styles.UsersFlalist}
    contentContainerStyle={styles.userContainerListStyle}
    data={usersState.users}
    keyExtractor={(_,index)=>{
      return index.toString()
    }}
    renderItem={({item,index})=>{
      return <UserListItem item={item} nav={navigation}/>
    }}
    onEndReached={handleOnBottomReached}
    onEndReachedThreshold={0.1}
    onMomentumScrollBegin={() => { setOnEndReachedCalledDuringMomentum(false) }}
    />
     
    </View>:usersState.error && !usersState.loading ? <View style={[styles.UserListRoot,{alignItems:"center",justifyContent:"center"}]}> 
    <Text>Error</Text>
     
    </View>:<View style={[styles.UserListRoot,{alignItems:"center",justifyContent:"center"}]}> 
    <Progress.Circle size={loaderSize} indeterminate={true} color="red" thickness={10}/></View>}

    
    {usersState.loading && usersState.users.length != 0 ? <View style={{alignItems:"center",width:"100%",padding:15}}> 
    <Progress.Circle size={30} indeterminate={true} color="red" />
  
    </View>:null}
   
    </View>)
 
  }

  export default UserList;