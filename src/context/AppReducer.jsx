// eslint-disable-next-line import/no-anonymous-default-export
export default (state,action) =>{
    switch(action.type){
        case "DELETE" :
            return{
                ...state,
                transaction:state.transaction.filter(transaction => transaction.id !== action.payload)
            }
        case "ADD_TRANS":
            return{
                ...state,
                transaction:[action.payload,...state.transaction]

            }
        default:
            return state;
    }
}