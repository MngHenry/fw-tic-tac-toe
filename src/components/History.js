import React from "react";

function History({ history, jumpBack }) {
  return (
    <div className="history">
      <h4>History</h4>
      <ul>
        {history.map((step, move) => {
          const des = move ? "Go to move #" + move : "go to start";
          return (
            <li key={move}>
              <button onClick={() => jumpBack(move)}>{des}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default History;
