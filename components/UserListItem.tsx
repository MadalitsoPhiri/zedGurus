import React, { useEffect } from "react"
import { Image, StyleSheet, Text, View, StatusBar,Dimensions, Touchable, TouchableWithoutFeedback, Pressable} from "react-native"
import { RandomUser } from "../types/RandomUserType"


const {width,height} = Dimensions.get("window")
const AVATARSIZE = 70
const SPACING = 20
const DetailAreaWidth = width - (SPACING * 2) * 2
const styles = StyleSheet.create({
    UserItemContainer:{
        flexDirection:"row",
        flex:1,
        padding:SPACING,
        backgroundColor:"white",
        borderRadius:12,
        marginBottom:SPACING,
        justifyContent:"flex-start",
        alignItems:"center",
        elevation:8
      },
      UserAvatar:{
        width:AVATARSIZE,
        height:AVATARSIZE,
        borderRadius:50,
        marginRight:SPACING / 2,
     
      },
      Fullname:{
        fontSize:22,
        fontWeight:"700",
        fontFamily:"Poppins-ExtraBold"
      },
      Email:{

        fontSize:18,
        color:"gray",
        flex: 1,
        flexWrap:"wrap",
        fontFamily:"Poppins-Regular"
       
     },
})
interface UserListItem{
    item:RandomUser,
    nav:any
}
const UserListItem = ({item,nav}:UserListItem)=>{
    const handleOnItemClick = ()=>{
        nav.navigate('Details',item)
    }
    useEffect(()=>{
    StatusBar.setBarStyle('dark-content')
    },[])
return(
    <Pressable style={styles.UserItemContainer} onPress={handleOnItemClick}>
      

       
        <View>
        <Image source={{uri:item.picture.thumbnail}}  style={styles.UserAvatar}/> 
        </View>
       

     <View style={{flex:1}}>
                <Text numberOfLines={2} style={styles.Fullname}>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
        
           
                <Text numberOfLines={2} style={styles.Email}>{item.email}</Text>
     
                </View>
      
                </Pressable>
          
         
)
}

export default UserListItem