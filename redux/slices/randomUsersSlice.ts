import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RandomUser } from '../../types/RandomUserType'
import * as usersApiCalls from '../../network/usersApiCalls'


export interface randomUsersState {
  users:RandomUser[], 
  loading:boolean,
  error:boolean,
  nextPage:number
}

const initialState: randomUsersState = {
 users:[], 
 loading:true,
 error:false,
 nextPage:1
}

export const fetchUsers = createAsyncThunk<RandomUser[],{page:number,seed:string}>('randomUsers/fetch',async({page,seed})=>{
const results = 40

const response = await usersApiCalls.fetchUsers({page,results,seed})

if(response.type === 'success'){
return response.body ?? []
}else{
throw Error("Api call failed")
}

})


export const randomUsersSlice = createSlice({
  name: 'randomUsers',
  initialState,
  reducers: {
  
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchUsers.fulfilled,(state,action:PayloadAction<RandomUser[]>)=>{
     state.nextPage += 1
     state.loading = false
     state.users = state.users.concat(action.payload)
     state.error = false
     console.log(state.users.length)
    }),
    builder.addCase(fetchUsers.pending,(state)=>{
      state.loading = true
      state.error = false
     }),
     builder.addCase(fetchUsers.rejected,(state)=>{
      state.loading = false
      state.error = true
     })
  }
})

// Action creators are generated for each case reducer function
export const {} = randomUsersSlice.actions

export default randomUsersSlice.reducer