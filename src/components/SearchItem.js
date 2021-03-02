import React from "react";

import { getTimePassed } from "../utils/getTimePassed";

const SearchItem = ({ item }) => {
    return (
        <div>
            <h3>
                {item.title}{" "}
                <a href={item.url} target="_blank">
                    (Read more here)
                </a>
            </h3>
            <p>
                {item.points} points | {item.author} |{" "}
                {getTimePassed(item.created_at)} | {item.num_comments}
            </p>
        </div>
    );
};

export default SearchItem;
