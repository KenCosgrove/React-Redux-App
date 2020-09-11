import React from 'react'

const Golfer = ({ golfer }) => {
    

    return (

       
    <div className="cardContainer">
        <div className="flexbox">
                <h1> {golfer.Name}  </h1> 
                <p> odds to win: {golfer.OddsToWin} <span>|</span> fpts: {golfer.FantasyPointsDraftKings} </p>
           
                
    </div> 
        
          </div> 
        )
}

export default Golfer