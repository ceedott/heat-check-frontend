import PlayerAveragesRow from "./PlayerAveragesRow";

function PlayerAveragesTable({averages}) {
    return (
        <table className="player-averages-table">
            <thead>
                <tr>
                    <th>MP</th>
                    <th>PTS</th>
                    <th>OREB</th>
                    <th>DREB</th>
                    <th>REB</th>
                    <th>AST</th>
                    <th>FG</th>
                    <th>FGA</th>
                    <th>FG%</th>
                    <th>3P</th>
                    <th>3PA</th>
                    <th>3P%</th>
                    <th>FT</th>
                    <th>FTA</th>
                    <th>FT%</th>
                    <th>BLK</th>
                    <th>STL</th>
                    <th>TOV</th>
                    <th>PF</th>
                    <th>PFD</th>
                    <th>+/-</th>
                </tr>
            </thead>
            <tbody>
                <PlayerAveragesRow averages={averages} />
            </tbody>
        </table>
    );
}

export default PlayerAveragesTable;