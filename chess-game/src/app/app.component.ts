import { Injectable } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chess-game';
}
enum PieceType {
  Pawn,
  Knight,
  Bishop,
  Rook,
  Queen,
  King
}
class ChessPiece {
  constructor(public type: PieceType, public color: string) {}
}
class BoardCell {
  constructor(public piece: ChessPiece | null = null) {}
}


class Chessboard {
  cells: BoardCell[][];

  constructor() {
    this.cells = Array.from({ length: 8 }, () =>
      Array.from({ length: 8 }, () => new BoardCell())
    );
  }

  // Initialize the starting position of pieces
  initialize() {
    // Initialize pawns
    for (let col = 0; col < 8; col++) {
      this.cells[1][col].piece = new ChessPiece(PieceType.Pawn, 'white');
      this.cells[6][col].piece = new ChessPiece(PieceType.Pawn, 'black');
    }

    // Initialize other pieces
    // ... (implement initialization of other pieces)
  }
}




@Injectable({
  providedIn: 'root'
})
export class ChessGameService {
  private chessboard: Chessboard;

  constructor() {
    this.chessboard = new Chessboard();
    this.chessboard.initialize();
  }

  getBoard(): BoardCell[][] {
    return this.chessboard.cells;
  }

  // Implement methods for making moves, checking valid moves, etc.
}





