import useVideos from "../hooks/useVideos";

const Videos = () => {

    const {
        videos,
        loading,
        error
    } = useVideos();


    if (loading) {
        return (
            <div className="status-message">
                Loading videos...
            </div>
        );
    }


    if (error) {
        return (
            <div className="status-message error">
                Error: {error}
            </div>
        );
    }


    return (
        <section className="videos-section">

            <h2>YouTube Video Titles</h2>

            <div className="video-list">

                {videos.map((video) => (

                    <div
                        className="video-card"
                        key={video.id}
                    >

                        <div className="video-thumbnail">
                            ▶
                        </div>

                        <div className="video-info">

                            <h3>
                                {video.title}
                            </h3>

                            <p>
                                Video ID: {video.id}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
};

export default Videos;