import { useEffect, useState } from "react";

const useRestaurants = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchRestaurants = async () => {

            try {

                setLoading(true);

                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch restaurant data");
                }

                const data = await response.json();

                const restaurantData = data.map((restaurant) => ({
                    id: restaurant.id,
                    name: restaurant.name,
                    location: restaurant.address.city,
                    rating: (4 + Math.random()).toFixed(1)
                }));

                setRestaurants(restaurantData);

            } catch (err) {

                setError(err.message);

            } finally {

                setLoading(false);

            }
        };

        fetchRestaurants();

    }, []);

    return {
        restaurants,
        loading,
        error
    };
};

export default useRestaurants;