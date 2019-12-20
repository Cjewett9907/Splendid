import React from 'react';
// import './app_style.css';

const PlayerHand = () => {
   
        return(
            
            <div className="player-hand-flexer">
                <h4>Player turn</h4>
                    <div className='take-options'>
                        <h4>take red</h4>
                        <h4>take blue</h4>
                        <h4>take green</h4>
                        <h4>take white</h4>
                        <h4>take black</h4>
                        <h4>take gold</h4>
                    </div>
                    <section className= "show-section"></section>
                    <div className='action-buttons'>
                        <h4>TAKE ACTION</h4>
                        <h4>CLEAR</h4>
                        <h4>OPTIONS</h4>
                    </div>
                
            </div>
        )
    
}



export default PlayerHand