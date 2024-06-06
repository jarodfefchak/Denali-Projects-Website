import React, { useEffect } from "react";
import Project1Img from '../images/ProvenSuccess/Project1.jpg';
import Project2Img from '../images/ProvenSuccess/Project2.jpg';
import Project3Img from '../images/ProvenSuccess/Project3.jpg';
import './ProvenSuccess.css';

function ProvenSuccess() {
    useEffect(() => {
        window.$('#carouselExampleIndicators').carousel();
    }, []);

    return (
        <div className="backgroundPS">
            <div className="layoutPS">
                <p className="titlePS"><b>Proven Success</b></p>
                <p className="subtitlePS">Engineering Energy, Empowering Progress</p>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-80" src={Project1Img} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-80" src={Project2Img} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-80" src={Project3Img} alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default ProvenSuccess;
