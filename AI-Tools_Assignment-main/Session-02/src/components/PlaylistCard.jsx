const PlaylistCard = ({ playlist }) => {
    return (
        <div className="playlist-card">
            <h3>{playlist.name}</h3>

            <p>
                <strong>Creator:</strong> {playlist.creator}
            </p>

            <p>
                <strong>Song Count:</strong> {playlist.songCount}
            </p>
        </div>
    );
};

export default PlaylistCard;