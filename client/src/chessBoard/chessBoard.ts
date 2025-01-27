import { useState } from "react";

interface ChessMenType {
  name: string;
  piece:string | null;
  tag: string | null;
}

export const loadPieces = (position: ChessMenType[][], flip: Boolean): void => {
  position.forEach((rank) => {
    rank.forEach((square) => {
      const element = document.getElementById(square.name);
      if (element) {
        // Add the chess piece image if it exists
        element.innerHTML = square.piece
          ? `<img class="aspect-square" src="src/assets/chessmen/${square.piece}.png" alt="${square.piece}" />`
          : '';
        // Ensure the parent square has relative positioning
        element.style.position = 'relative';
        // Add the tag to the bottom-left of the square
        if(!flip){
          element.innerHTML += `<div style="position: absolute; bottom: 0; left: 0; margin: 2px; font-size: 12px; z-index: 1; display:flex; flex-direction: column">${square.tag || ''}</div>`;
        }else{
          element.innerHTML += `<div style="position: absolute; bottom: 0; right: 0; margin: 2px; font-size: 12px; z-index: 1; display:flex; flex-direction: row-reverse">${square.tag || ''}</div>`;
        }
        
        
      }
    });
  });
};

