import { useEffect, useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);
  const [activeUser, setActiveUser] = useState("A");
  const [moves, setMoves] = useState(0);
  const [result, setResult] = useState(null);

  const [board, setBoard] = useState(() =>
    Array.from({ length: rows }, () => Array(columns).fill(null))
  );

  const resetGame = () => {
    setMoves(0);
    setBoard(() =>
      Array.from({ length: rows }, () => Array(columns).fill(null))
    );
    setActiveUser("A");
    setResult(null);
  };

  const updateMatrixValue = (i, j) => {
    if (board[i][j]) {
      alert("Invalid Move");
      return;
    } else {
      setMoves((prev) => prev + 1);
      let value = activeUser == "A" ? "O" : "X";
      setBoard((prev) => {
        return prev.map((row, k) => {
          if (k == i) {
            return row.map((col, l) => {
              if (l == j) {
                return value;
              } else {
                return col;
              }
            });
          } else {
            return row;
          }
        });
      });
      setActiveUser((prev) => (prev == "A" ? "B" : "A"));
    }
  };

  const checkRows = () => {
    let winner = null;
    for (let i = 0; i < board.length; i++) {
      let prev = board[i][0];
      for (let j = 1; j < board[i].length; j++) {
        if (board[i][j] && board[i][j] == prev) {
          prev = board[i][j];
          if (j == board[i].length - 1) {
            winner = prev == "X" ? "B" : "A";
          }
        } else {
          break;
        }
      }

      if (winner) {
        return winner;
      }
    }
    return winner;
  };

  const checkColumns = () => {
    let winner = null;
    for (let i = 0; i < columns; i++) {
      let prev = board[0][i];
      for (let j = 1; j < board[i].length; j++) {
        if (board[j][i] && board[j][i] == prev) {
          prev = board[j][i];
          if (j == rows - 1) {
            winner = prev == "X" ? "B" : "A";
          }
        } else {
          break;
        }
      }

      if (winner) {
        return winner;
      }
    }
    return winner;
  };

  const checkDiagonals = () => {
    let winner = null;
    let prev = board[0][0];
    for (let i = 1, j = 1; i < columns; i++, j++) {
      if (board[i][j] && board[i][j] == prev) {
        if (i == rows - 1) {
          winner = prev == "X" ? "B" : "A";
          break;
        } else {
          prev = board[i][j];
        }
      } else {
        break;
      }
    }

    if (!winner) {
      prev = board[0][columns - 1];
      for (let i = 1, j = columns - 2; i < rows, j >= 0; i++, j--) {
        if (board[i][j] && board[i][j] == prev) {
          if (i == rows - 1) {
            winner = prev == "X" ? "B" : "A";
            break;
          } else {
            prev = board[i][j];
          }
        } else {
          break;
        }
      }
    }
    return winner;
  };

  const checkWinner = () => {
    let win;
    win = checkRows();
    if (!win) {
      win = checkColumns();
      if (!win) {
        win = checkDiagonals();
      }
    }

    if (win) {
      // setWinner(win);
      setResult("Player " + win + " is Winner");
      // resetGame();
    } else if (moves == columns * rows) {
      setResult("This is a tie");
      // resetGame();
    }
    // checkDiagonals();
  };

  useEffect(() => {
    checkWinner();
    console.log("board :>> ", board);
  }, [board]);
  return (
    <>
      <h1>Active user:{activeUser}</h1>
      <div className="board">
        {board.map((row, i) => {
          return (
            <div className="row">
              {row.map((cols, j) => (
                <div className="col" onClick={() => updateMatrixValue(i, j)}>
                  {cols}
                </div>
              ))}
            </div>
          );
        })}
      </div>
      {result && <h3>{result}</h3>}
    </>
  );
};

export default TicTacToe;
