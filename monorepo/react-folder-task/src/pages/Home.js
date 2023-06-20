import {Link} from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io";
import React, {useEffect} from "react";

const Home = ({ setCurrentStep, options = [] }) => {
    useEffect(() => {
        setCurrentStep(1);
    },[setCurrentStep]);

    return (
        <div className="main">
            <div className="content">
                <div className="options-container background-white">
                    {options.map((option) => (
                        <Link to={`/post/${option.id}`} key={option.id} className="option-container">
                            {option.image && <img src={option.image} alt={option.name} className="option-image" />}
                            <div  className="option-link">
                                {option.name}
                            </div>
                            <span className="icon-container">
                                 <IoIosArrowForward />
                            </span>
                        </Link>
                    ))}
                </div>
                <div className="singleDiv background-white">Not sure about the consultation type? Please call <a className='phoneNumber' href="tel:02037959063">0203 7959063</a></div>
            </div>
        </div>
    );
}

export default Home;
