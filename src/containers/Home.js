import React, { Component } from "react";
import { connect } from "react-redux";

import SearchResults from "../components/SearchResults";
import SearchForm from "../components/SeachForm";

class Home extends Component {
    render() {
        let { searchedTerms } = this.props;

        let previousSearches = <p>Get searching!</p>;

        if (searchedTerms.length) {
            previousSearches = (
                <div>
                    Your previous searches:
                    {searchedTerms.map((searchTerm) => (
                        <p>{searchTerm}</p>
                    ))}
                </div>
            );
        }

        return (
            <div>
                <h1>Welcome to Hacker News (Unstyled)</h1>
                {previousSearches}
                <SearchForm />
                <SearchResults />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchedTerms: state.searchedTerms,
    };
};
export default connect(mapStateToProps, null)(Home);
