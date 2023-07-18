import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface IUserState {
  email: string;
  _id: string;
  accessToken: string;
}
const initialState: IUserState = {
  email: "",
  _id: "",
  accessToken: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<IUserState>) => {
      state.email = action.payload.email;
      state._id = action.payload.accessToken;
    },
    removeUser: (state) => {
      (state.email = ""), (state._id = ""), (state.accessToken = "");
    },
  },
});
export const { saveUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
