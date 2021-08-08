export type NetworkApiResponse<T> = {
    type:'success' | 'failure', 
    body?:T
}