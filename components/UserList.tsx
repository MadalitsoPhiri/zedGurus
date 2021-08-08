import {
  FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
 
 
import React, { FC, useEffect } from 'react';
import {StoreState} from "../redux/store"
import {useSelector,useDispatch} from "react-redux"
import { RandomUser } from '../types/RandomUserType';
import {fetchUsers} from "../redux/slices/randomUsersSlice"
import uuid from 'react-native-uuid';




const seed = uuid.v4().toString(); 
const UserList:FC = ()=>{
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
       headingBackground:{
         backgroundColor:"red",
         borderRadius:20,
         padding:15
       },
       userlist:{
         flex:1,
         width:"100%",
         height:"100%",
         padding:"5%"
       }
    })
    return( <>
    {!usersState.loading && usersState.users.length != 0  && <View style={styles.container}> 
    <FlatList
    style={styles.userlist}
    data={usersState.users}
    keyExtractor={(_,index)=>{
      return index.toString()
    }}
    renderItem={({item,index})=>{
      return <><Text>{item.name.first}</Text>
      <Text>{item.email}</Text></>
    }}
    onEndReached={handleOnBottomReached}
    onEndReachedThreshold={0.1}
    onMomentumScrollBegin={() => { setOnEndReachedCalledDuringMomentum(false) }}
    />
     
    </View>}

    {usersState.loading &&<View style={{alignItems:"center",justifyContent:"center"}}> 
    <Text>Loading</Text>
     
    </View>}
    {usersState.error && <View style={styles.container}> 
    <Text>Error</Text>
     
    </View>}
   
    </>)
 
  }

  export default UserList;