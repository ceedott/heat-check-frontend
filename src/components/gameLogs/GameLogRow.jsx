function GameLogRow({ gameLog }) {
    // date, team, opp, result, mp, pts, orb, drb, trb, ast, fg, fga, fg%, 3p, 3pa, 3p%, ft, fta, ft%, blk, stl, tov, +/-
    return (
        <tr>
            <td>{gameLog.gameDate}</td>
            <td>{gameLog.team}</td>
            <td>{gameLog.oppTeam}</td>
            <td>{gameLog.winLoss}</td>
            <td>{gameLog.minutes}</td>
            <td>{gameLog.pts}</td>
            <td>{gameLog.oreb}</td>
            <td>{gameLog.dreb}</td>
            <td>{gameLog.reb}</td>
            <td>{gameLog.ast}</td>
            <td>{gameLog.fgm}</td>
            <td>{gameLog.fga}</td>
            <td>{gameLog.fgPer.toFixed(2)}</td>
            <td>{gameLog.fg3m}</td>
            <td>{gameLog.fg3a}</td>
            <td>{gameLog.fg3Per.toFixed(2)}</td>
            <td>{gameLog.ftm}</td>
            <td>{gameLog.fta}</td>
            <td>{gameLog.ftPer.toFixed(2)}</td>
            <td>{gameLog.blk}</td>
            <td>{gameLog.stl}</td>
            <td>{gameLog.tov}</td>
            <td>{gameLog.plusMinus}</td>
        </tr>
    )
}

export default GameLogRow;