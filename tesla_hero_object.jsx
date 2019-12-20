import React, {Component} from 'react'
import PlayerHand from './player_hand'
import ToolBar from './toolbar'
// import './app_style.css'
import Overlay from './overlay'

class TeslaHero extends Component{
    constructor(props){
        super(props);

        this.state = { 
            error: "RUT ROH",
            
            colors: ["red","blue","green","white","black", "gold"],
            
            bank:{coins:{
                red: 7,
                blue: 7,
                green: 7,
                white: 7,
                black: 7,
                gold: 5
            },},

            players:
            [{"player1": {
               name: "bob",
               disposition: "builder",
               avatar: "",
               coins:{
                   red: 0,
                   blue: 0,
                   green: 0,
                   white: 0,
                   black: 0,
                   gold: 0
               },
               cards:{
                red: 0,
                blue: 0,
                green: 0,
                white: 0,
                black: 0
               },
               victoryPoints: 0,
               
               
            }}, {"player2": {
                name: "Veruca",
                disposition: "Selfish",
                avatar: "",
                coins:{
                    red: 0,
                    blue: 0,
                    green: 0,
                    white: 0,
                    black: 0,
                    gold: 0
                },
                cards:{
                 red: 0,
                 blue: 0,
                 green: 0,
                 white: 0,
                 black: 0
                },
                victoryPoints: 0,
                

            }}, {"player3":{
                name: "Jerky",
                disposition: "Jerk",
                avatar: "",
                coins:{
                    red: 0,
                    blue: 0,
                    green: 0,
                    white: 0,
                    black: 0,
                    gold: 0
                },
                cards:{
                 red: 0,
                 blue: 0,
                 green: 0,
                 white: 0,
                 black: 0
                },
                victoryPoints: 0,

            }}, {"player4":{
                name: "TheBrain",
                disposition: "best_route_to_15.exe",
                avatar: "",
                coins:{
                    red: 0,
                    blue: 0,
                    green: 0,
                    white: 0,
                    black: 0,
                    gold: 0
                },
                cards:{
                 red: 0,
                 blue: 0,
                 green: 0,
                 white: 0,
                 black: 0
                },
                victoryPoints: 0,

            }}],

            selectedCoins: [],

            currentPlayer: {"player1": {
                name: "bob",
                disposition: "builder",
                avatar: "",
                coins:{
                    red: 0,
                    blue: 0,
                    green: 0,
                    white: 0,
                    black: 0,
                    gold: 0
                },
                cards:{
                 red: 0,
                 blue: 0,
                 green: 0,
                 white: 0,
                 black: 0
                },
                victoryPoints: 0,
                   
             }}
        }
        this.updatebank=this.updatebank.bind(this);
    }

    componentDidMount(){
        this.updatebank();
    }

    updatebank(){
        let sections = document.querySelectorAll("section[class^='coin-holder']")
        let current_colors = this.state.colors

        for(let i = 0; i < current_colors.length; i++){
            let cSection = sections[i]
            let cColor = current_colors[i]
            // numCoins is not fucntional yet 'undefined'
            let numCoins = this.state.bank.coins.cColor

            console.log("cSection is ", cSection);
            console.log("cColor is ", cColor);
            console.log("numCOins is ", numCoins);
            console.log("this.state.bank ", this.state.bank.coins);
            console.log("this.state.bank ", this.state.bank.coins.cColor);
            
            

            if (numCoins){
                for(let i = 0; i < numCoins; i++){
                    // cSection is not a type of node???
                    cSection.appendChild(document.createElement('div').className = "coin-" + cColor)
                }
            }
        }
    }


    render(){

        return(
            <div>
                
                <div className="div1"> 
                <ToolBar />
                <PlayerHand />
                
                <Overlay />
              
                </div>
            </div>
        );
    }
}

export default TeslaHero