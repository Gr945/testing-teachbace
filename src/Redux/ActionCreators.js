export const addUserAC = (user) => ({
  type: "ADD_USER",
  payload: user
});

export const addUserSagaAC = (login,
  password,email) => ({
  type: "ADD_USER_SAGA",
  payload: {
   login,email,password
  },
});




export const enterUserSagaAC = (login,
  password) => ({
  type: "ENTER_USER_SAGA",
  payload: {
   login,password
  },
});
