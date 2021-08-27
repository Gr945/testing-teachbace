import { call, put, takeEvery } from "redux-saga/effects";
import { addUserAC } from "../ActionCreators";

const fetchAddUser = async (login, password, email) => {
  const res = await fetch(
    "http://ec2-18-117-84-227.us-east-2.compute.amazonaws.com:3000/register",
    {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ login, password, email }),
    }
  );
  const data = await res.json();
  return data;
};

export function* workerAddUser(action) {
  try {
    const { login, password, email } = action.payload;
    const user = yield call(fetchAddUser, login, password, email);
    console.log(user);
    yield put(addUserAC({ login, password, email }));
  } catch (e) {
    yield put({ type: "error", message: e.message });
  }
}

const fetchEntranceUser = async (login, password) => {
  const res = await fetch(
    "http://ec2-18-117-84-227.us-east-2.compute.amazonaws.com:3000/login",
    {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ login, password }),
    }
  );
  const data = await res.json();
  return data;
};

export function* workerEnterUser(action) {
  try {
    const { login, password} = action.payload;
    
    const user = yield call(fetchEntranceUser, login, password);
    console.log(user);
   
  } catch (e) {
    yield put({ type: "error", message: e.message });
  }
}

export function* watcher() {
  yield takeEvery("ADD_USER_SAGA", workerAddUser);
  yield takeEvery("ENTER_USER_SAGA", workerEnterUser);
}
