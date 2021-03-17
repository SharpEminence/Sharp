const userReducer = (state = { users: [] }, action) => {
  
  switch (action.type) {
    
    case "ADD_USER":
      {
        console.log('reddddd',action.payload)
        return {
       
        users: [...state.users, action.payload],
      };
      }
    case "DELETE_USER":
      const data = state.users.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        users: state.users.filter(
          (user) => user.id !== action.payload
        ),
      };
    case "EDIT_USER":
      console.log('state',state.users)
      const userIndex = state.users.findIndex(
        (updateUser) => updateUser.id === action.payload.id
      );
      console.log('state',action.payload.user,'lll',userIndex)
      state.users[userIndex] = action.payload.user;
      return {
        ...state,
        users: [...state.users],
      };
    default:
      return state;
  }
};

export default userReducer;
