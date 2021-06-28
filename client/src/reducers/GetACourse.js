export default (state = [], actions) => {
  switch (actions.type) {
    case "FETCH_A_COURSE":
      return actions.payload;
    default:
      return state;
  }
};
