import {Link, useParams} from "react-router-dom";
import React, {useEffect} from "react";

const Post  = ({ setCurrentStep, options = [] }) => {
    const { selectedId } = useParams();
    const selectedOption = options.find(x => x.id === selectedId);

    useEffect(() => {
        setCurrentStep(2);
    },[setCurrentStep]);

    return (
        <div className="content">
            <h2>{selectedOption.name}</h2>
            <img src={selectedOption.image} alt={selectedOption.name} className="post-image" />
            <h3>{selectedOption.text}</h3>
            <Link to="/" className="back-link">
                Back to all posts
            </Link>
        </div>
    );
}

export default Post;
