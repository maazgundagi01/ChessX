import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChessMenType {
  name: string;
  piece:string | null;
  tag:string | null;
  x:string
  y:string
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
        { name: 'a8', x:'a', y:'8', piece: 'BRook1', tag:'8' },
        { name: 'b8', x:'b', y:'8', piece: 'BKnight1', tag:''},
        { name: 'c8', x:'c', y:'8', piece: 'BBishop1', tag:''},
        { name: 'd8', x:'d', y:'8', piece: 'BQueen', tag:''},
        { name: 'e8', x:'e', y:'8', piece: 'BKing', tag:'' },
        { name: 'f8', x:'f', y:'8', piece: 'BBishop2', tag:''},
        { name: 'g8', x:'g', y:'8', piece: 'BKnight2', tag:''},
        { name: 'h8', x:'h', y:'8', piece: 'BRook2', tag:''}
      ],
      [
        { name: 'a7', x:'a', y:'7', piece: 'BPawn1', tag:'7'  },
        { name: 'b7', x:'b', y:'7', piece: 'BPawn2', tag:''  },
        { name: 'c7', x:'c', y:'7', piece: 'BPawn3', tag:''  },
        { name: 'd7', x:'d', y:'7', piece: 'BPawn4', tag:''  },
        { name: 'e7', x:'e', y:'7', piece: 'BPawn5', tag:''  },
        { name: 'f7', x:'f', y:'7', piece: 'BPawn6', tag:''  },
        { name: 'g7', x:'g', y:'7', piece: 'BPawn7', tag:''  },
        { name: 'h7', x:'h', y:'7', piece: 'BPawn8', tag:''  }
      ],
      [
        { name: 'a6', x:'a', y:'6', piece: null, tag:'6'  },
        { name: 'b6', x:'b', y:'6', piece: null, tag:''  },
        { name: 'c6', x:'c', y:'6', piece: null, tag:''  },
        { name: 'd6', x:'d', y:'6', piece: null, tag:''  },
        { name: 'e6', x:'e', y:'6', piece: null, tag:''  },
        { name: 'f6', x:'f', y:'6', piece: null, tag:''  },
        { name: 'g6', x:'g', y:'6', piece: null, tag:''  },
        { name: 'h6', x:'h', y:'6', piece: null, tag:''  }
      ],
      [
        { name: 'a5', x:'a', y:'5', piece: null, tag:'5'  },
        { name: 'b5', x:'b', y:'5', piece: null, tag:''  },
        { name: 'c5', x:'c', y:'5', piece: null, tag:''  },
        { name: 'd5', x:'d', y:'5', piece: null, tag:''  },
        { name: 'e5', x:'e', y:'5', piece: null, tag:''  },
        { name: 'f5', x:'f', y:'5', piece: null, tag:''  },
        { name: 'g5', x:'g', y:'5', piece: null, tag:''  },
        { name: 'h5', x:'h', y:'5', piece: null, tag:''  }
      ],
      [
        { name: 'a4', x:'a', y:'4', piece: null, tag:'4'  },
        { name: 'b4', x:'b', y:'4', piece: null, tag:''  },
        { name: 'c4', x:'c', y:'4', piece: null, tag:''  },
        { name: 'd4', x:'d', y:'4', piece: null, tag:''  },
        { name: 'e4', x:'e', y:'4', piece: null, tag:''  },
        { name: 'f4', x:'f', y:'4', piece: null, tag:''  },
        { name: 'g4', x:'g', y:'4', piece: null, tag:''  },
        { name: 'h4', x:'h', y:'4', piece: null, tag:''  }
      ],
      [
        { name: 'a3', x:'a', y:'3', piece: null, tag:'3'  },
        { name: 'b3', x:'b', y:'3', piece: null, tag:''  },
        { name: 'c3', x:'c', y:'3', piece: null, tag:''  },
        { name: 'd3', x:'d', y:'3', piece: null, tag:''  },
        { name: 'e3', x:'e', y:'3', piece: null, tag:''  },
        { name: 'f3', x:'f', y:'3', piece: null, tag:''  },
        { name: 'g3', x:'g', y:'3', piece: null, tag:''  },
        { name: 'h3', x:'h', y:'3', piece: null, tag:''  }
      ],
      [
        { name: 'a2', x:'a', y:'2', piece: 'WPawn1', tag:'2'  },
        { name: 'b2', x:'b', y:'2', piece: 'WPawn2', tag:''  },
        { name: 'c2', x:'c', y:'2', piece: 'WPawn3', tag:''  },
        { name: 'd2', x:'d', y:'2', piece: 'WPawn4', tag:''  },
        { name: 'e2', x:'e', y:'2', piece: 'WPawn5', tag:''  },
        { name: 'f2', x:'f', y:'2', piece: 'WPawn6', tag:''  },
        { name: 'g2', x:'g', y:'2', piece: 'WPawn7', tag:''  },
        { name: 'h2', x:'h', y:'2', piece: 'WPawn8', tag:''  }
      ],
      [
        { name: 'a1', x:'a', y:'1', piece: 'WRook1', tag:'<span>1</span><span>a</span>'  },
        { name: 'b1', x:'b', y:'1', piece: 'WKnight1', tag:'b'  },
        { name: 'c1', x:'c', y:'1', piece: 'WBishop1', tag:'c'  },
        { name: 'd1', x:'d', y:'1', piece: 'WQueen', tag:'d'  },
        { name: 'e1', x:'e', y:'1', piece: 'WKing', tag:'e'  },
        { name: 'f1', x:'f', y:'1', piece: 'WBishop2', tag:'f'  },
        { name: 'g1', x:'g', y:'1', piece: 'WKnight2', tag:'g'  },
        { name: 'h1', x:'h', y:'1', piece: 'WRook2', tag:'h' }
      
    ]
  ]
  }],
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    //flip the board
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
              if (targetSquare) {
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
