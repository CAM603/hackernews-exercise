import React, { useState } from "react";
import { connect } from "react-redux";

import { searchHackerNews } from "../store/actions";

const SearchForm = ({ searchHackerNews }) => {
    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        searchHackerNews(search);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="search-news">Search Hacker News: </label>
                <input
                    type="search"
                    id="search-news"
                    name="search"
                    onChange={handleChange}
                    value={search}
                />
                <button disabled={!search.length}>Go!</button>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchHackerNews: (searchTerm) =>
            dispatch(searchHackerNews(searchTerm)),
    };
};

export default connect(null, mapDispatchToProps)(SearchForm);
