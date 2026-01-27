function GameLogPaginationControls({ page, totalPages, totalItems, isFirst, isLast, onNext, onPrev }) {
    return (
        <div className="pagination-controls">
            <button onClick={onPrev} disabled={isFirst}>
                Previous
            </button>

            <span>Page {page+1} of {totalPages}</span>

            <button onClick={onNext} disabled={isLast}>
                Next
            </button>
        </div>
    );
}

export default GameLogPaginationControls;