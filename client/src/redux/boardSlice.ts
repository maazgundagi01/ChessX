import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChessMenType {
  name: string;
  piece:string | null;
  tag:string | null;
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
        { name: 'a8', piece: 'BRook1', tag:'8' },
        { name: 'b8', piece: 'BKnight1', tag:''},
        { name: 'c8', piece: 'BBishop1', tag:''},
        { name: 'd8', piece: 'BQueen', tag:''},
        { name: 'e8', piece: 'BKing', tag:'' },
        { name: 'f8', piece: 'BBishop2', tag:''},
        { name: 'g8', piece: 'BKnight2', tag:''},
        { name: 'h8', piece: 'BRook2', tag:''}
      ],
      [
        { name: 'a7', piece: 'BPawn1', tag:'7'  },
        { name: 'b7', piece: 'BPawn2', tag:''  },
        { name: 'c7', piece: 'BPawn3', tag:''  },
        { name: 'd7', piece: 'BPawn4', tag:''  },
        { name: 'e7', piece: 'BPawn5', tag:''  },
        { name: 'f7', piece: 'BPawn6', tag:''  },
        { name: 'g7', piece: 'BPawn7', tag:''  },
        { name: 'h7', piece: 'BPawn8', tag:''  }
      ],
      [
        { name: 'a6', piece: null, tag:'6'  },
        { name: 'b6', piece: null, tag:''  },
        { name: 'c6', piece: null, tag:''  },
        { name: 'd6', piece: null, tag:''  },
        { name: 'e6', piece: null, tag:''  },
        { name: 'f6', piece: null, tag:''  },
        { name: 'g6', piece: null, tag:''  },
        { name: 'h6', piece: null, tag:''  }
      ],
      [
        { name: 'a5', piece: null, tag:'5'  },
        { name: 'b5', piece: null, tag:''  },
        { name: 'c5', piece: null, tag:''  },
        { name: 'd5', piece: null, tag:''  },
        { name: 'e5', piece: null, tag:''  },
        { name: 'f5', piece: null, tag:''  },
        { name: 'g5', piece: null, tag:''  },
        { name: 'h5', piece: null, tag:''  }
      ],
      [
        { name: 'a4', piece: null, tag:'4'  },
        { name: 'b4', piece: null, tag:''  },
        { name: 'c4', piece: null, tag:''  },
        { name: 'd4', piece: null, tag:''  },
        { name: 'e4', piece: null, tag:''  },
        { name: 'f4', piece: null, tag:''  },
        { name: 'g4', piece: null, tag:''  },
        { name: 'h4', piece: null, tag:''  }
      ],
      [
        { name: 'a3', piece: null, tag:'3'  },
        { name: 'b3', piece: null, tag:''  },
        { name: 'c3', piece: null, tag:''  },
        { name: 'd3', piece: null, tag:''  },
        { name: 'e3', piece: null, tag:''  },
        { name: 'f3', piece: null, tag:''  },
        { name: 'g3', piece: null, tag:''  },
        { name: 'h3', piece: null, tag:''  }
      ],
      [
        { name: 'a2', piece: 'WPawn1', tag:'2'  },
        { name: 'b2', piece: 'WPawn2', tag:''  },
        { name: 'c2', piece: 'WPawn3', tag:''  },
        { name: 'd2', piece: 'WPawn4', tag:''  },
        { name: 'e2', piece: 'WPawn5', tag:''  },
        { name: 'f2', piece: 'WPawn6', tag:''  },
        { name: 'g2', piece: 'WPawn7', tag:''  },
        { name: 'h2', piece: 'WPawn8', tag:''  }
      ],
      [
        { name: 'a1', piece: 'WRook1', tag:'<span>1</span><span>a</span>'  },
        { name: 'b1', piece: 'WKnight1', tag:'b'  },
        { name: 'c1', piece: 'WBishop1', tag:'c'  },
        { name: 'd1', piece: 'WQueen', tag:'d'  },
        { name: 'e1', piece: 'WKing', tag:'e'  },
        { name: 'f1', piece: 'WBishop2', tag:'f'  },
        { name: 'g1', piece: 'WKnight2', tag:'g'  },
        { name: 'h1', piece: 'WRook2', tag:'h' }
      
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
    move: (state, action: PayloadAction<{ piece: string | null; to: string | null }>) => {
  const { piece, to } = action.payload;

  if (piece && to) {
    // Loop through the board to find the piece
    for (let i = 0; i < state.value.length; i++) {
      const position = state.value[i].position;
      for (let rank of position) {
        const pieceIndex = rank.findIndex((square) => square.piece === piece);
        if (pieceIndex !== -1) {
          // Find target square
          const targetSquare = position.flat().find((square) => square.name === to);
          if (targetSquare && !targetSquare.piece) {
            // Move the piece
            targetSquare.piece = piece;
            rank[pieceIndex].piece = null;
            return; // Exit after moving
          }
        }
      }
    }
  }
},

  },
});

export const { boardFlip, move } = boardSlice.actions;
export default boardSlice.reducer;
