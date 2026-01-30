import { getAllGames, getAllGamesByPlayer } from "../services/api";
import { getPlayerAverages } from "../services/averagesApi";
import { useEffect, useState } from "react";
import GameLog from "../components/GameLog";
import GameLogsTable from "../components/gameLogs/GameLogsTable";
import GameLogPaginationControls from "../components/gameLogs/GameLogPaginationControls";
import PlayerAveragesTable from "../components/playerAverages/PlayerAveragesTable";
import HeatCheck from "../components/heatCheck/heatCheck";
import { getHeatCheck } from "../services/heatCheckApi";

function ApiTest() {
    const [playerGames, setPlayerGames] = useState([]); // games for player
    const [playerGamesPage, setPlayerGamesPage] = useState(0); // page number for game log pagination
    const [playerGamesPageData, setPlayerGamesPageData] = useState(null); // full page data for game logs
    const [playerAverages, setPlayerAverages] = useState(null); // player averages data
    const [playerHeatCheck, setPlayerHeatCheck] = useState(null); // player heat check data
    const [error, setError] = useState(null); // each useEffect should have unique error state
    const [loading, setLoading] = useState(false); // each useEffect should have unique loading state
    const [searchInput, setSearchInput] = useState(""); // raw search query input
    const [searchQuery, setSearchQuery] = useState(null); // processed search query

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

    const parsePlayerName = () => {
        const parts = searchInput.trim().split(/\s+/);

        return {
            first: parts[0] || "",
            last: parts.slice(1).join(" ") || ""
        }

    }

    const handleSearch = (e) => {
        // event handlers transform input
        e.preventDefault();

        const parsed = parsePlayerName(); // returns object with first and last name

        if (!parsed.first || !parsed.last) {
            alert("Please enter both first and last name.");
            return;
        }

        setSearchQuery(parsed)
        setPlayerGamesPage(0); // reset to first page on new search
    }

    // gets all games by player with pagination after search or page change
    useEffect(() => {
        if (!searchQuery) return; // dont run on startup

        const loadGamesByPlayer = async () => {
            setLoading(true);
            setError(null);

            try {
                const { first, last } = searchQuery;
                console.log("Getting player game logs for " + first + " " + last);
                // pass in object with first, last, and page
                const gamesByPlayer = await getAllGamesByPlayer({ first, last, page: playerGamesPage });
                //console.log(gamesByPlayer);
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
    , [searchQuery, playerGamesPage]);

    // get player averages after search
    useEffect(() => {
        if (!searchQuery) return; // dont run on startup

        const loadPlayerAverages = async () => {
            setLoading(true);
            setError(null);

            try {
                const { first, last } = searchQuery;
                console.log("Getting player averages for " + first + " " + last); 
                // pass in object with first and last name
                const playerAveragesResponse = await getPlayerAverages({ first, last });
                //console.log(playerAveragesResponse);
                setPlayerAverages(playerAveragesResponse);
            } catch (error) {
                setError(error);
                console.error("Error fetching player averages:", error);
            } finally {
                setLoading(false);
            }

        }

        loadPlayerAverages();
    }, [searchQuery]);

    // get player heat check on startup 
    useEffect(() => {
        if (!searchQuery) return; // dont run on startup

        const loadPlayerHeatCheck = async () => {
            setLoading(true);
            setError(null);

            try {
                const { first, last } = searchQuery;
                const heatCheckResponse = await getHeatCheck({ first, last });
                setPlayerHeatCheck(heatCheckResponse);
            } catch (error) {
                setError(error);
                console.error("Error fetching player heat check:", error);
            } finally {
                setLoading(false);
            }
        }

        loadPlayerHeatCheck();
    }, [searchQuery])

    return (
        <div className="api-test">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search player by name..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)} // on change we update search query state
                />
                <button className="search-button" type="submit">Search</button>
            </form>

            {error && <p className="error-message">Error: {error.message}</p>}
            {loading && <p className="loading-message">Loading...</p>}

            {searchQuery && playerHeatCheck && !error && !loading && (
                <HeatCheck heatLevel={playerHeatCheck}/>
            )}

            {searchQuery && playerAverages && !error && !loading && (
                <>
                    <PlayerAveragesTable averages={playerAverages} />
                </>
            )}

            {searchQuery && playerGamesPageData && !error && !loading && (
                <>
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
                </>
            )}
            
        </div>
    );
}

export default ApiTest;