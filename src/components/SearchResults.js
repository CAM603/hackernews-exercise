import React, { useState } from "react";
import { connect } from "react-redux";
import SearchItem from "./SearchItem";

const SearchResults = ({ loading, results }) => {
    if (loading) return <h3>Loading...</h3>;
    return (
        <div>
            {results.map((result) => {
                return <SearchItem key={result.objectId} item={result} />;
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        results: state.searchResults,
        loading: state.loading,
    };
};
export default connect(mapStateToProps, null)(SearchResults);
