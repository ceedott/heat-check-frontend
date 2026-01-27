function GameLog({gameLog}) {
    return (
        <div className="game-log">
            <div>{gameLog.name}</div>
            <div>{gameLog.gameDate}</div>
            <div>{gameLog.team} vs {gameLog.oppTeam}</div>
            <div>Points: {gameLog.pts} | Rebounds: {gameLog.reb} | Assists: {gameLog.ast}</div>
        </div>
    );
}

export default GameLog;