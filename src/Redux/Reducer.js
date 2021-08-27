export default function reducer(
  state = { users: [],user:{}},
  action
) {
  switch (action.type) {
    case "ADD_USERS":
      return { ...state, users: [...state.users, action.payload] };
  
    case "ADD_USER":
      return {
        ...state,
        user:  action.payload
      };

    default:
      return state;
  }
}
