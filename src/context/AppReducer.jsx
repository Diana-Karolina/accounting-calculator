

export default (state, action) => {
switch(action.type){
    case 'ADD_TRANSATION':
        return {
            ...state,
            transactions:[...state.transactions, action.payload]
        };
        case 'DELETE_TRANSATION':
            return{
                ...state,
                transactions: state.transactions.filter
                (transaction => transaction.id !== action.payload),
            };
    default:
        return state
  }
};