import useRestaurants from "../hooks/useRestaurants";

const RestaurantList = () => {

    const {
        restaurants,
        loading,
        error
    } = useRestaurants();


    if (loading) {
        return (
            <div className="status-message">
                Loading restaurants...
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
        <section className="restaurant-section">

            <h2>Zomato Style Restaurant Listing</h2>

            <div className="restaurant-grid">

                {restaurants.map((restaurant) => (

                    <div
                        className="restaurant-card"
                        key={restaurant.id}
                    >

                        <div className="restaurant-image">
                            🍽️
                        </div>

                        <div className="restaurant-details">

                            <h3>
                                {restaurant.name}
                            </h3>

                            <p>
                                📍 {restaurant.location}
                            </p>

                            <span className="rating">
                                ⭐ {restaurant.rating}
                            </span>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
};

export default RestaurantList;