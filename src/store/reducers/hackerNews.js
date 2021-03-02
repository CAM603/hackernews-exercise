import {
    GET_NEWS_START,
    GET_NEWS_SUCCESS,
    GET_NEWS_FAILURE,
} from "../actions/hackerNews";

const initialState = {
    searchedTerms: [],
    searchResults: [],
    loading: false,
    error: "",
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NEWS_START:
            return {
                ...state,
                searchedTerms: [...state.searchedTerms, action.payload],
                loading: true,
                error: "",
            };
        case GET_NEWS_SUCCESS:
            return {
                ...state,
                searchResults: action.payload,
                loading: false,
            };
        case GET_NEWS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;
