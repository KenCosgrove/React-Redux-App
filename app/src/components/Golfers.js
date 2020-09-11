import React from 'react'
import Golfer from './Golfer'
import { connect } from 'react-redux'


function Golfers(props) {
    
    return (
        <>
            <h3>Leaderboard:</h3>
            {props.golfer.map(item => {
                return <Golfer key={item.PlayerID} golfer={item} score={item.score} pos={item.rank} />
            })}
        </>
    )
}

function mapStateToProps(state) {
    return {
        golfer: state.golfer
    }
}

export default connect(mapStateToProps, {})(Golfers)