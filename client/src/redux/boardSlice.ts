import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BoardInstance {
  id: string;
  flip: boolean;
}

interface BoardState {
  value: BoardInstance[];
}

const initialState: BoardState = {
  value: [{ id: "board1", flip: false }],
};


const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    boardFlip: (state, action: PayloadAction<{ id: string; flip: boolean }>) => {
      const board = state.value.find((b) => b.id === action.payload.id);
      if (board) {
        board.flip = action.payload.flip;
      }
    },
  },
});

export const { boardFlip } = boardSlice.actions;
export default boardSlice.reducer;
