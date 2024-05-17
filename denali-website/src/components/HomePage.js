import HomeMainSection from "./HomeMainSection";
import Header from "./Header";
import Footer from "./Footer";
import './HomePage.css';

function HomePage() {
    return (
        <div className="head-image">
                <Header />
        <div className = "MainSection"><HomeMainSection /></div>
        <div className ="footer" ><Footer /></div>
        </div>
    );
};

export default HomePage;