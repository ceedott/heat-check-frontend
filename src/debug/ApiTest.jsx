import { getAllGames, getAllGamesByPlayer } from "../services/api";
import { getPlayerAverages } from "../services/averagesApi";
import { useEffect, useState } from "react";
import GameLog from "../components/GameLog";
import GameLogsTable from "../components/gameLogs/GameLogsTable";
import GameLogPaginationControls from "../components/gameLogs/GameLogPaginationControls";
import PlayerAveragesTable from "../components/playerAverages/PlayerAveragesTable";

function ApiTest() {
    const [playerGames, setPlayerGames] = useState([]); // games for player
    const [playerGamesPage, setPlayerGamesPage] = useState(0); // page number for game log pagination
    const [playerGamesPageData, setPlayerGamesPageData] = useState(null); // full page data for game logs
    const [playerAverages, setPlayerAverages] = useState(null); // player averages data
    const [error, setError] = useState(null); // each useEffect should have unique error state
    const [loading, setLoading] = useState(true); // each useEffect should have unique loading state

    // gets all games
    // useEffect(() => {
    //     const loadGames = async () => {
    //         try { // use .then() and .catch() maybe ?
    //             const games = await getAllGames();
    //             console.log(games);
    //         } catch (error) {
    //             console.error("Error fetching games:", error);
    //             setError(error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }

    //     loadGames();
    // }
    // , []);

    // gets all games by player with pagination
    useEffect(() => {
        const loadGamesByPlayer = async () => {
            setLoading(true);
            setError(null);

            try {
                const gamesByPlayer = await getAllGamesByPlayer(playerGamesPage);
                console.log(gamesByPlayer);
                setPlayerGames(gamesByPlayer.items);
                setPlayerGamesPageData({
                    pageNumber: gamesByPlayer.page,
                    pageSize: gamesByPlayer.pageSize,
                    totalItems: gamesByPlayer.totalItems,
                    totalPages: gamesByPlayer.totalPages,
                    first: gamesByPlayer.first,
                    last: gamesByPlayer.last
                });
            } catch (error) {
                setError(error);
                console.error("Error fetching games by player:", error);
            } finally {
                setLoading(false);
            }
        }

        loadGamesByPlayer();
    }
    , [playerGamesPage]);

    // get player averages on startup (lebron)
    useEffect(() => {
        const loadPlayerAverages = async () => {
            setLoading(true);
            setError(null);

            try {
                const playerAveragesResponse = await getPlayerAverages();
                console.log(playerAveragesResponse);
                setPlayerAverages(playerAveragesResponse);
            } catch (error) {
                setError(error);
                console.error("Error fetching player averages:", error);
            } finally {
                setLoading(false);
            }

        }

        loadPlayerAverages();
    }, []);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;
    if (!playerGamesPageData) return null;

    return (
        <div className="api-test">
            <PlayerAveragesTable averages={playerAverages} />
            <br />
            <GameLogsTable gameLogs={playerGames} />
            <GameLogPaginationControls 
                page={playerGamesPage}
                totalPages={playerGamesPageData.totalPages}
                totalItems={playerGamesPageData.totalItems}
                isFirst={playerGamesPageData.first}
                isLast={playerGamesPageData.last}
                onNext={() => setPlayerGamesPage(prev => prev + 1)}
                onPrev={() => setPlayerGamesPage(prev => prev - 1)}
            />
        </div>
    );
}

export default ApiTest;