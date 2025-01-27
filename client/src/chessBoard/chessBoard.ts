interface ChessMenType {
  name: string;
  piece:string | null;
}

export const loadPieces = (position:ChessMenType[][]) => {
  position.forEach((rank) => {
    rank.forEach((square) => {
      let element = document.getElementById(square.name);
      if (element) {
        element.innerHTML = square.piece ? `<img className="aspect-square " src="src/assets/chessmen/${square.piece}.png" alt="${square.piece}" />` : '';
      }
    });
  });
};