import React, { useEffect } from "react"
import { Image, StyleSheet, Text, View, StatusBar,Dimensions, ScrollView} from "react-native"
import { NativeStackScreenProps} from '@react-navigation/native-stack';
import { RandomUser } from "../types/RandomUserType"
import { Pressable } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign  from "react-native-vector-icons/AntDesign";
import FontAwesome  from "react-native-vector-icons/FontAwesome";





const {width,height} = Dimensions.get("window")
const AVATARSIZE = width * 0.3
const SPACING = 20
const sectioIconSize = 30
const styles = StyleSheet.create({
    UserListItemRoot:{
        flex:1,
        width:"100%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
      },
      HeaderCard:{
        flex:1,
        padding:SPACING,
        backgroundColor:"white",
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        marginBottom:SPACING * 2,
        justifyContent:"center",
        alignItems:"center",
        elevation:8
      },
      sectionContainer:{
        flex:1,
      },
      section:{
        flexDirection:"row",
        flex:1,
        padding:SPACING,
        backgroundColor:"white",
        borderRadius:20,
        marginBottom:SPACING,
        justifyContent:"flex-start",
        alignItems:"center",
        elevation:8,
        
      },
      UserDetailsScrollStyle:{
        paddingHorizontal:SPACING,
        paddingBottom:30
      
      },
      UserAvatar:{
          width:AVATARSIZE,
          height:AVATARSIZE,
          borderRadius:AVATARSIZE,

      },
      UserAvatarContainer:{
        justifyContent:"center",
        alignItems:"center", 
        width:AVATARSIZE + 15,
        height:AVATARSIZE + 15,
        borderRadius:AVATARSIZE + 15,
        borderColor:"red",
        borderWidth:4,
        padding:15,
        marginBottom:SPACING
    },
    UserNameBadge:{
        borderRadius:50,
        paddingHorizontal:20,
        paddingVertical:10,
        backgroundColor:"red",
        position:"absolute",
        bottom:-20,
      
    },
    Name:{
        fontSize:18,
        fontWeight:"900",
        color:"white",
        fontFamily:"Poppins-Bold"
    },
    infoText:{
      fontFamily:"Poppins-Medium",
      fontSize:16
    },
    infoHeading:{
        fontFamily:"Poppins-Bold",
        fontSize:16
    },
    column:{
        flex:1
    },
    sectionIcon:{
        marginRight:15
    },
    infoTextHeading:{
        fontFamily:"Poppins-Bold"
    }
})
interface UserDetails{
    route:any
    navigation:any
}

const Details = ({route,navigation}:UserDetails)=>{
    const User = route.params
    console.log(User)
    return(
        <View style={styles.UserListItemRoot}>
           
             <Image source={require('../assets/backgroundDetails.png')}  style={[StyleSheet.absoluteFill,{width:"100%",height:"100%"}]} blurRadius={60}/>
            
                <ScrollView  contentContainerStyle={styles.UserDetailsScrollStyle} style={{height:"100%",width:"100%"}}>
                    <View style={styles.HeaderCard}>
                        <View style={styles.UserAvatarContainer}>
                        <Image source={{uri:User.picture.large}}  style={styles.UserAvatar}/>
                      
                       
                        </View>
                   
                    <Pressable style={styles.UserNameBadge}>
                        <Text style={styles.Name}>{`${User.name.title}  ${User.name.first}  ${User.name.last}`}</Text>
                        </Pressable> 
                    </View>
                    <View style={styles.sectionContainer}>
                    <Text style={styles.infoHeading}>Personal</Text>
                        <View style={styles.section}>
                            
                        <MaterialIcons name="date-range" size={sectioIconSize} color="black" style={styles.sectionIcon}/>
                        <View style={styles.column}>
                        <Text style={styles.infoText}><Text style={styles.infoTextHeading}>Born:</Text> {User.dob.date}</Text>
                        <Text style={styles.infoText}><Text style={styles.infoTextHeading}>Age:</Text> {User.dob.age}</Text>
                        <Text style={styles.infoText}><Text style={styles.infoTextHeading}>Gender:</Text> {User.gender}</Text>
                        </View>
                    
                        </View>
                    </View>

                    <View style={styles.sectionContainer}>
                    <Text style={styles.infoHeading}>Contact</Text>
                        <View style={styles.section}>
                        <AntDesign name="contacts" size={sectioIconSize} color="black" style={styles.sectionIcon} />
                        <View style={styles.column}>
                        <Text style={styles.infoText}><Text style={styles.infoTextHeading}>Email:</Text> {User.email}</Text>
                        <Text style={styles.infoText}><Text style={styles.infoTextHeading}>Phone:</Text> {User.phone}</Text>
                        <Text style={styles.infoText}><Text style={styles.infoTextHeading}>Cell:</Text> {User.cell}</Text>
                        </View>
                        </View>
                    </View>

                    <View style={styles.sectionContainer}>
                    <Text style={styles.infoHeading}>Address</Text>
                        <View style={styles.section}>
                        <FontAwesome name="street-view" size={sectioIconSize} color="black" style={styles.sectionIcon}/>
                        <View style={styles.column}>
                        <Text style={styles.infoText}><Text style={styles.infoTextHeading}>Street: </Text>{User.location.street.name}</Text>
                        <Text style={styles.infoText}><Text style={styles.infoTextHeading}>Streetnumber: </Text>{User.location.street.number}</Text>
                        <Text style={styles.infoText}><Text style={styles.infoTextHeading}>City: </Text>{User.location.city}</Text>
                        <Text style={styles.infoText}><Text style={styles.infoTextHeading}>State: </Text>{User.location.state}</Text>
                        <Text style={styles.infoText}><Text style={styles.infoTextHeading}>Postcode: </Text>{User.location.postcode}</Text>
                        <Text style={styles.infoText}><Text style={styles.infoTextHeading}>Country: </Text>{User.location.country}</Text>
                      
                        </View>
                        </View>

                     
                    </View>


                   
                   
                   

                </ScrollView> 
        
        </View>
    )
}
export default Details