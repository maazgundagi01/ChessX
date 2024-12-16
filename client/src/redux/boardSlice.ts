import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BoardItem {
  id: string;
  name: string;
}

interface BoardState {
  value: BoardItem ,
};

const initialState: BoardState = {
  value: {id:'none', name:'none'}, // Initialize as null or a default object
}; 

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
      boardUpdate: (state, action: PayloadAction<BoardItem>) => {
      state.value = action.payload; // Update the state with the new object
    },
  },
});

// Export actions and reducer
export const { boardUpdate} = boardSlice.actions;
export default boardSlice.reducer;