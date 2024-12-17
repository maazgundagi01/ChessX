import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BoardInstance {
  id: string;
}

interface BoardDisplayProcessingUnit{
  value: BoardInstance[],
};

const initialState: BoardDisplayProcessingUnit = {
  value: [{id:''}], // Initialize as null or a default object
}; 

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
      boardUpdate: (state, action: PayloadAction<any>) => {
      state.value = action.payload; // Update the state with the new object
    },
  },
});

// Export actions and reducer
export const { boardUpdate} = boardSlice.actions;
export default boardSlice.reducer;