import axios from 'axios'

export const FETCH_GOLFER = 'FETCH_GOLFER';
export const FETCH_GOLFER_SUCCESS = 'FETCH_GOLFER_SUCCESS';
export const FETCH_GOLFER_ERROR = 'FETCH_GOLFER_ERROR';

export const fetchGolfer = ()  => {
    return (dispatch) => {
        dispatch({ type: FETCH_GOLFER });
        axios.get('https://api.sportsdata.io/golf/v2/json/Leaderboard/387?Key=1302D6477E4E4B1DB46FEA00FA181587')
            .then(res => {
                console.log(res.data.Players);
                dispatch({ type: FETCH_GOLFER_SUCCESS, payload: res.data.Players })
            })
            .catch(err => {
                dispatch({ type: FETCH_GOLFER_ERROR, payload: "error"})
            })
    }
}