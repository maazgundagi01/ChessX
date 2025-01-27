import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChessMenType {
  name: string;
  piece:string | null;
}
interface BoardInstance {
  id: string;
  flip: boolean;
  position: ChessMenType[][];
}

interface BoardState {
  value: BoardInstance[];
}

const initialState: BoardState = {
  value: [{ 
    id: "board1", 
    flip: false, 
    position: [
      [
        { name: 'a8', piece: 'BRook1' },
        { name: 'b8', piece: 'BKnight1' },
        { name: 'c8', piece: 'BBishop1' },
        { name: 'd8', piece: 'BQueen' },
        { name: 'e8', piece: 'BKing' },
        { name: 'f8', piece: 'BBishop2' },
        { name: 'g8', piece: 'BKnight2' },
        { name: 'h8', piece: 'BRook2' }
      ],
      [
        { name: 'a7', piece: 'BPawn1' },
        { name: 'b7', piece: 'BPawn2' },
        { name: 'c7', piece: 'BPawn3' },
        { name: 'd7', piece: 'BPawn4' },
        { name: 'e7', piece: 'BPawn5' },
        { name: 'f7', piece: 'BPawn6' },
        { name: 'g7', piece: 'BPawn7' },
        { name: 'h7', piece: 'BPawn8' }
      ],
      [
        { name: 'a6', piece: null },
        { name: 'b6', piece: null },
        { name: 'c6', piece: null },
        { name: 'd6', piece: null },
        { name: 'e6', piece: null },
        { name: 'f6', piece: null },
        { name: 'g6', piece: null },
        { name: 'h6', piece: null }
      ],
      [
        { name: 'a5', piece: null },
        { name: 'b5', piece: null },
        { name: 'c5', piece: null },
        { name: 'd5', piece: null },
        { name: 'e5', piece: null },
        { name: 'f5', piece: null },
        { name: 'g5', piece: null },
        { name: 'h5', piece: null }
      ],
      [
        { name: 'a4', piece: null },
        { name: 'b4', piece: null },
        { name: 'c4', piece: null },
        { name: 'd4', piece: null },
        { name: 'e4', piece: null },
        { name: 'f4', piece: null },
        { name: 'g4', piece: null },
        { name: 'h4', piece: null }
      ],
      [
        { name: 'a3', piece: null },
        { name: 'b3', piece: null },
        { name: 'c3', piece: null },
        { name: 'd3', piece: null },
        { name: 'e3', piece: null },
        { name: 'f3', piece: null },
        { name: 'g3', piece: null },
        { name: 'h3', piece: null }
      ],
      [
        { name: 'a2', piece: 'WPawn1' },
        { name: 'b2', piece: 'WPawn2' },
        { name: 'c2', piece: 'WPawn3' },
        { name: 'd2', piece: 'WPawn4' },
        { name: 'e2', piece: 'WPawn5' },
        { name: 'f2', piece: 'WPawn6' },
        { name: 'g2', piece: 'WPawn7' },
        { name: 'h2', piece: 'WPawn8' }
      ],
      [
        { name: 'a1', piece: 'WRook1' },
        { name: 'b1', piece: 'WKnight1' },
        { name: 'c1', piece: 'WBishop1' },
        { name: 'd1', piece: 'WQueen' },
        { name: 'e1', piece: 'WKing' },
        { name: 'f1', piece: 'WBishop2' },
        { name: 'g1', piece: 'WKnight2' },
        { name: 'h1', piece: 'WRook2' }
      
    ]
  ]
  }],
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
    move: (state, action: PayloadAction<{ piece: string; to: string }>) => {
      console.log(state, action )
    },
  },
});

export const { boardFlip } = boardSlice.actions;
export default boardSlice.reducer;
