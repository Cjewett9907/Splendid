import React from 'react'



const Overlay = (props) =>{

    const saysomething = (ev) => {
        console.log("HUZZAH");
        console.log("event.target is ", ev.target)
    };

    return(
        <div className="overlay-flexer">


            <div className="bank">
                <h1>THE BANK</h1>
                <div className="bank-field" >RED
                    <section className="coin-holder" 
                    // onClick={props.takecoin}
                    >
                    
                    </section>
                </div>
                <div className="bank-field">BLUE
                    <section className="coin-holder" onClick={saysomething}>
                            
                        </section>
                    </div>
                <div className="bank-field">GREEN
                    <section className="coin-holder" onClick={saysomething}>
                        
                    </section>
                </div>
                <div className="bank-field">WHITE
                    <section className="coin-holder" onClick={saysomething}>
                       
                    </section>
                </div>
                <div className="bank-field">BLACK
                    <section className="coin-holder" onClick={saysomething}>
                      
                    </section>
                </div>
                <div className="bank-field">GOLD
                    <section className="coin-holder" onClick={saysomething}>
                     
                    </section>
                </div>
            </div>
            <br/>
            <div>
                    
                
                
                <div className="specs-flexer">
                    {/* <img className="thumbnail" src="https://img.pngio.com/up-to-speedpng-speed-png-424_236.png" alt="speed icon"/> */}
                   
                    
                    
                   
                   <div className="row-flexer">
                        <div className='card-down-n'>X a card X </div>
                        <div className='card-n'>
                            <img className='thumb-img-n' src="https://images.fineartamerica.com/images-medium-large-5/portrait-of-a-merchant-jan-gossaert.jpg" alt=""/>
                        </div>
                        <div className='card-n'>
                            <img className='thumb-img-n' src="https://images.fineartamerica.com/images-medium-large-5/portrait-of-a-merchant-jan-gossaert.jpg" alt=""/>
                        </div>
                        <div className='card-n'>
                            <img className='thumb-img-n' src="https://images.fineartamerica.com/images-medium-large-5/portrait-of-a-merchant-jan-gossaert.jpg" alt=""/>
                        </div>
                        <div className='card-n'>
                            <img className='thumb-img-n' src="https://images.fineartamerica.com/images-medium-large-5/portrait-of-a-merchant-jan-gossaert.jpg" alt=""/>
                        </div>
                   </div>

                   <div className="row-flexer">
                        <div className='card-down'>X a card X </div>
                        <div className='card'>
                            <img className='thumb-img' src="https://www.donrobertojewelers.com/media/catalog/product/cache/1/image/988x988/9df78eab33525d08d6e5fb8d27136e95/1/3/1335030200_ruby.jpg" alt=""/>
                        </div>
                        <div className='card'>
                            <img className='thumb-img' src="https://www.donrobertojewelers.com/media/catalog/product/cache/1/image/988x988/9df78eab33525d08d6e5fb8d27136e95/1/3/1335030200_ruby.jpg" alt=""/>
                        </div>
                        <div className='card'>
                            <img className='thumb-img' src="https://www.donrobertojewelers.com/media/catalog/product/cache/1/image/988x988/9df78eab33525d08d6e5fb8d27136e95/1/3/1335030200_ruby.jpg" alt=""/>
                        </div>
                        <div className='card'>
                            <img className='thumb-img' src="https://www.donrobertojewelers.com/media/catalog/product/cache/1/image/988x988/9df78eab33525d08d6e5fb8d27136e95/1/3/1335030200_ruby.jpg" alt=""/>
                        </div>
                   </div>

                   <div className="row-flexer">
                        <div className='card-down'>X a card X </div>
                        <div className='card'>
                            <img className='thumb-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgD9-InpfFAi1nRRAmiiTzb0c-4c0XEOT19oPL-PfqdVNwjoZI&s" alt=""/>
                        </div>
                        <div className='card'>
                            <img className='thumb-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgD9-InpfFAi1nRRAmiiTzb0c-4c0XEOT19oPL-PfqdVNwjoZI&s" alt=""/>
                        </div>
                        <div className='card'>
                            <img className='thumb-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgD9-InpfFAi1nRRAmiiTzb0c-4c0XEOT19oPL-PfqdVNwjoZI&s" alt=""/>
                        </div>
                        <div className='card'>
                            <img className='thumb-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgD9-InpfFAi1nRRAmiiTzb0c-4c0XEOT19oPL-PfqdVNwjoZI&s" alt=""/>
                        </div>
                   </div>

                   <div className="row-flexer">
                        <div className='card-down'>X a card X </div>
                        <div className='card'>
                            <img className='thumb-img' src="https://www.preciousmetals.com/pub/media/mageplaza/blog/post/uploads/2014/07/silver-eagle-coin-stacks.jpg" alt=""/>
                        </div>
                        <div className='card'>
                            <img className='thumb-img' src="https://www.preciousmetals.com/pub/media/mageplaza/blog/post/uploads/2014/07/silver-eagle-coin-stacks.jpg" alt=""/>
                        </div>
                        <div className='card'>
                            <img className='thumb-img' src="https://www.preciousmetals.com/pub/media/mageplaza/blog/post/uploads/2014/07/silver-eagle-coin-stacks.jpg" alt=""/>
                        </div>
                        <div className='card'>
                            <img className='thumb-img' src="https://www.preciousmetals.com/pub/media/mageplaza/blog/post/uploads/2014/07/silver-eagle-coin-stacks.jpg" alt=""/>
                        </div>
                   </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Overlay