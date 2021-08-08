import { NetworkApiResponse } from "../types/NetworkApiResponseType";
import { RandomUser } from "../types/RandomUserType";

interface fetchProps{
    page:number,
    results:number,
    seed:string
}

export const fetchUsers = async (arg:fetchProps):Promise<NetworkApiResponse<RandomUser[]>> =>{
  const response = await fetch(`https://randomuser.me/api/?results=${arg.results}&page=${arg.page}&seed=${arg.seed}`,
  {method:'GET',
  headers:{
   Accept:'application/json',
   'Content-Type':'application/json'   
  }
}
  )

 if(response.ok){
     const json = await response.json()
     return {
         type:'success',
         body:json.results
     }

 } else{
     return{
         type:'failure'
     }
     
 }
    
}

