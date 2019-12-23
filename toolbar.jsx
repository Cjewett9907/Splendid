import React from 'react';
// import './app_style.css';

const ToolBar = () => {
   
        return(
            <div className="toolbar-flexer">
                <h4>Splendid</h4>
                    <div className='take-options'>
                        <div className= "button-spacer-red">
                            <button >+1</button>
                            <h6>Take Red</h6>
                            <button >-1 </button>
                        </div>
                        <div className= "button-spacer-blue">
                            <button >+1</button>
                            <h6>Take Blue</h6>
                            <button >-1 </button>
                        </div>
                        <div className= "button-spacer-green">
                            <button >+1</button>
                            <h6>Take Green</h6>
                            <button >-1 </button>
                        </div>
                        <div className= "button-spacer-white">
                            <button >+1</button>
                            <h6>Take White</h6>
                            <button >-1 </button>
                        </div>
                        <div className= "button-spacer-black">
                            <button >+1</button>
                            <h6>Take Black</h6>
                            <button >-1 </button>
                        </div>
                        <div className= "button-spacer-gold">
                            <button >+1</button>
                            <h6>Take Gold</h6>
                            <button >-1 </button>
                        </div>
                        
                    </div>

                    <div className='user-auth'>
                        <h4>SHOP</h4>
                        <h4>SIGN IN</h4>
                        <h4>OPTIONS /// </h4>
                    </div>
                
            </div>
        )
    
}



export default ToolBar