import axios from "../../utils/axios-hacker";

export const GET_NEWS_START = "GET_NEWS_START";
export const GET_NEWS_SUCCESS = "GET_NEWS_SUCCESS";
export const GET_NEWS_FAILURE = "GET_NEWS_FAILURE";

export const setSearchParam = (searchParam) => {
    return {
        type: GET_NEWS_START,
        payload: searchParam,
    };
};

export const setResults = (results) => {
    return {
        type: GET_NEWS_SUCCESS,
        payload: results,
    };
};

export const setResultsFailed = (error) => {
    return {
        type: GET_NEWS_FAILURE,
        payload: error,
    };
};

export const searchHackerNews = (searchParam) => {
    return (dispatch) => {
        dispatch(setSearchParam(searchParam));
        axios
            .get(`/search?query=${searchParam}`)
            .then((res) => {
                dispatch(setResults(res.data.hits));
            })
            .catch((error) => {
                dispatch(setResultsFailed(error));
            });
    };
};
