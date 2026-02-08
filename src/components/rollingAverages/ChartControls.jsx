import '../../css/ChartControls.css';

function ChartControls({ statType, setStatType, numGames, setNumGames }) {
    return (
        <div className="chart-controls">
            <label>
                Stat:
                <select value={statType} onChange={(e) => setStatType(e.target.value)}>
                    <option value="PTS">Points</option>
                    <option value="REB">Rebounds</option>
                    <option value="AST">Assists</option>
                </select>
            </label>

            <label>
                Games:
                <select value={numGames} onChange={(e) => setNumGames(Number(e.target.value))}>
                    <option value={5}>5</option> 
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </label>
        </div>
    );
}

export default ChartControls;