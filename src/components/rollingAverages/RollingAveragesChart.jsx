import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { range } from '../../services/utility';

function RollingAveragesChart({rollingAverages, numGames, statType}) {
    return (
        <div className="rolling-averages-chart">
            <Line data={{
                labels: range(1, numGames + 1).reverse(),
                datasets: [{
                    label: statType, // should be dynamic based on stat type
                    // get avg attribute from each object in rollingAverages array and put in data array
                    data: rollingAverages.map((item) => item.avg),
                }]
            }} />
        </div>
    );
}

export default RollingAveragesChart;