import { useEffect, useState } from "react";

const useVideos = () => {

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        const fetchVideos = async () => {

            try {

                setLoading(true);

                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch videos");
                }

                const data = await response.json();

                setVideos(data.slice(0, 10));

            } catch (err) {

                setError(err.message);

            } finally {

                setLoading(false);

            }
        };

        fetchVideos();

    }, []);


    return {
        videos,
        loading,
        error
    };
};

export default useVideos;