export default (state=[],actions)=>{
  switch (actions.type) {
    case "FETCH_LOGIN":
      return actions.payload
    default:
      return {
        status:"failed"};
  }
}
