import { FETCH_GOLFER, FETCH_GOLFER_SUCCESS, FETCH_GOLFER_ERROR } from '../actions'

const initialState = {
    golfer: [],
    loadingGolfer: true,
    errorMessage: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GOLFER:
            return {
                ...state,
                loadingGolfer: true
            };
        case FETCH_GOLFER_ERROR:
            return {
                ...state,
                loadingGolfer: false,
                errorMessage: action.payload.message
            };
        case FETCH_GOLFER_SUCCESS:
            return {
                ...state,
                golfer: action.payload,
                loadingGolfer: false
            };
        default:
            return state;
    }
};
