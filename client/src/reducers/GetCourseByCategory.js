// eslint-disable-next-line import/no-anonymous-default-export
export default (state=[],actions)=>{
    switch(actions.type){
        case "GET_BY_CATEGORY":
            return actions.payload;
        default :
            return state;    
    }
};