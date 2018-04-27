import React from 'react';
import Tweet from './Tweet/Tweet';

const Tweets = (props) => {
    console.log("[Tweets]");
    let tweets = props.statuses;
    const list = Object.keys(props.statuses).map(tweet => {
        return <Tweet tweet={tweets[tweet]} key={tweets[tweet].id} />
    });

    return list;
};

export default Tweets;