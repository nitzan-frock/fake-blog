import React from 'react';

const Tweet = (props) => {
    return (
        <div>
            <p>{props.tweet.full_text}</p>
        </div>
    );
};

export default Tweet;