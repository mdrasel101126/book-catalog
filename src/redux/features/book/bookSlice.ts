import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface IBookState {
  genre: string;
  publicationDate: string;
  searchTerm: string;
}
const initialState: IBookState = {
  genre: "",
  publicationDate: "",
  searchTerm: "",
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setPublicationDate: (state, action: PayloadAction<string>) => {
      state.publicationDate = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});
export const { setGenre, setPublicationDate, setSearchTerm } =
  bookSlice.actions;
export default bookSlice.reducer;
