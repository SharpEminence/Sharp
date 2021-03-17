export const addUser = (user) => (dispatch, getState) => {
  dispatch({
    type: "ADD_USER",
    payload: {
      id: Math.random(),
      user,
    
    },
  });

  // localStorage.setItem("USER", JSON.stringify(getState().users));
};

export const deleteUser = (id) => (dispatch, getState) => {
  dispatch({
    type: "DELETE_USER",
    payload: id,
  });

  localStorage.setItem("USER", JSON.stringify(getState().users));
};

export const editUser = (data) => (dispatch, getState) => {
  console.log('edit data',data)
  let newUSER =  data

  if (newUSER) {
    dispatch({
      type: "EDIT_USER",
      payload: {
        id: data.id,
        user: newUSER,
      },
    });
    // localStorage.setItem("USER", JSON.stringify(getState().users));
  }
  //  else {
  //   alert("Got a blank value");
  // }
};
