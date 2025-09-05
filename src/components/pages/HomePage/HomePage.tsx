import React from "react";
import './HomePage.scss';

interface HomePageProps {

}
const HomePage: React.FC<HomePageProps> = () => {
    return (
        <div className="home-page">
            <h1>Welcome To Home Page</h1>
        </div>
    )
}

export default HomePage;