// eslint-disable-next-line import/no-anonymous-default-export
export default (state=[],actions)=>{
    switch(actions.type){
        case "SEARCH":
            return actions.payload;
        default :
            return state;    
    }
};