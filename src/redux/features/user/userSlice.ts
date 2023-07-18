import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface IUserState {
  email: string;
  _id: string;
  accessToken: string;
  userLoader: boolean;
}
const initialState: IUserState = {
  email: "",
  _id: "",
  accessToken: "",
  userLoader: true,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (
      state,
      action: PayloadAction<Pick<IUserState, "_id" | "accessToken" | "email">>
    ) => {
      state.email = action.payload?.email;
      state._id = action.payload?._id;
      state.accessToken = action.payload?.accessToken;
      state.userLoader = false;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setLoader: (state) => {
      state.userLoader = false;
    },
    removeUser: (state) => {
      state.email = "";
      state._id = "";
      state.accessToken = "";
      state.userLoader = false;
    },
  },
});
export const { saveUser, removeUser, setAccessToken, setLoader } =
  userSlice.actions;
export default userSlice.reducer;
