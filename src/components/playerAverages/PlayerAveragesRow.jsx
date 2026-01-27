// {
//     "minutes": 33.23076923076923,
//     "pts": 20.23076923076923,
//     "reb": 5.076923076923077,
//     "oreb": 0.6923076923076923,
//     "dreb": 4.384615384615385,
//     "ast": 6.846153846153846,
//     "fgm": 7.461538461538462,
//     "fga": 15.384615384615385,
//     "fgPer": 0.4813090127569766,
//     "fg3m": 1.4615384615384615,
//     "fg3a": 4.6923076923076925,
//     "fg3Per": 0.29835164835164835,
//     "ftm": 3.8461538461538463,
//     "fta": 5.769230769230769,
//     "ftPer": 0.6148379398379399,
//     "stl": 0.9230769230769231,
//     "blk": 0.6923076923076923,
//     "blka": 0.8461538461538461,
//     "tov": 2.4615384615384617,
//     "pf": 1.5384615384615385,
//     "pfD": 3.5384615384615383,
//     "plusMinus": -4.538461538461538
//   }

function PlayerAveragesRow({averages}) {
    return (
        <tr>
            <td>{averages.minutes.toFixed(2)}</td>
            <td>{averages.pts.toFixed(2)}</td>
            <td>{averages.oreb.toFixed(2)}</td>
            <td>{averages.dreb.toFixed(2)}</td>
            <td>{averages.reb.toFixed(2)}</td>
            <td>{averages.ast.toFixed(2)}</td>
            <td>{averages.fgm.toFixed(2)}</td>
            <td>{averages.fga.toFixed(2)}</td>
            <td>{averages.fgPer.toFixed(2)}</td>
            <td>{averages.fg3m.toFixed(2)}</td>
            <td>{averages.fg3a.toFixed(2)}</td>
            <td>{averages.fg3Per.toFixed(2)}</td>
            <td>{averages.ftm.toFixed(2)}</td>
            <td>{averages.fta.toFixed(2)}</td>
            <td>{averages.ftPer.toFixed(2)}</td>
            <td>{averages.blk.toFixed(2)}</td>
            <td>{averages.stl.toFixed(2)}</td>
            <td>{averages.tov.toFixed(2)}</td>
            <td>{averages.pf.toFixed(2)}</td>
            <td>{averages.pfD.toFixed(2)}</td>
            <td>{averages.plusMinus.toFixed(2)}</td>
        </tr>
    );
}

export default PlayerAveragesRow;