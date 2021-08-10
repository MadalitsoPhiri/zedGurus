import React, { FC, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from './UserList';
import Details from './Details';


const UserStack  = createNativeStackNavigator();

const UserStackNavigator = ()=>{
return (
    <UserStack.Navigator initialRouteName="Users">
         <UserStack.Screen
          name="Users"
          component={UserList}
          options={{ title: 'All Users' }}
        />
        <UserStack.Screen name="Details" component={Details} />
    </UserStack.Navigator>
)
}

export default UserStackNavigator