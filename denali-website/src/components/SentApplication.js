import Header from './Header';
import Footer from './Footer';
import "./SentApplication.css"

function SentApplication(){
    return(
        <div>
            <Header />
            <div className = "contentSA">
                <p>Thank You for Applying to (Blank Job) At Denali Projects</p>
            </div>
            <Footer/>
        </div>
    );
};

export default SentApplication;