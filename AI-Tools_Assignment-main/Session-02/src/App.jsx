import PlaylistCard from "./components/PlaylistCard";
import ProductCard from "./components/ProductCard";
import RestaurantList from "./components/RestaurantList";
import Videos from "./components/Videos";

import "./App.css";


const App = () => {

    const playlist = {
        name: "My Favorites",
        creator: "Paras",
        songCount: 25
    };


    const product = {
        image: "https://dummyimage.com/400x300/e8e8e8/333",
        title: "Wireless Headphones",
        price: 1499
    };


    return (
        <div className="app">

            {/* Header */}

            <header className="header">

                <h1>
                    Session 2
                </h1>

                <p>
                    AI Coding with ChatGPT & GitHub Copilot
                </p>

            </header>


            <main className="container">


                {/* Playlist */}

                <section className="section">

                    <h2>
                        Playlist Card
                    </h2>

                    <PlaylistCard
                        playlist={playlist}
                    />

                </section>


                {/* Product */}

                <section className="section">

                    <h2>
                        Product Card
                    </h2>

                    <ProductCard
                        product={product}
                    />

                </section>


                {/* Restaurants */}

                <section className="section">

                    <RestaurantList />

                </section>


                {/* Videos */}

                <section className="section">

                    <Videos />

                </section>


            </main>


            {/* Footer */}

            <footer className="footer">

                <p>
                    Session 2 React Project © 2026
                </p>

            </footer>

        </div>
    );
};

export default App;