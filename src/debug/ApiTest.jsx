import { getAllGames, getAllGamesByPlayer } from "../services/api";
import { useEffect, useState } from "react";
import GameLog from "../components/GameLog";
import GameLogsTable from "../components/gameLogs/GameLogsTable";
import GameLogPaginationControls from "../components/gameLogs/GameLogPaginationControls";

function ApiTest() {
    const [playerGames, setPlayerGames] = useState([]); // games for player
    const [playerGamesPage, setPlayerGamesPage] = useState(0); // page number for game log pagination
    const [playerGamesPageData, setPlayerGamesPageData] = useState(null); // full page data for game logs
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // gets all games
    useEffect(() => {
        const loadGames = async () => {
            try { // use .then() and .catch() maybe ?
                const games = await getAllGames();
                console.log(games);
            } catch (error) {
                console.error("Error fetching games:", error);
            } finally {
                console.log("Finished fetching games test.");
            }
        }

        loadGames();
    }
    , []);

    // gets all games by player with pagination
    useEffect(() => {
        const loadGamesByPlayer = async () => {
            setLoading(true);
            setError(null);

            try {
                console.log("Loading games for player, page:", playerGamesPage);
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
                console.log("Finished fetching games by player test.");
            }
        }

        loadGamesByPlayer();
    }
    , [playerGamesPage]);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;
    if (!playerGamesPageData) return null;

    return (
        <div className="api-test">
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