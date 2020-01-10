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
            let numCoins = this.state.bank.coins[cColor]
            
            if (numCoins){
                for(let i = 0; i < numCoins; i++){
                    // cSection is not a type of node???
                    let newNode = document.createElement('div');
                    newNode.className = `coin-${cColor}`;
                    newNode.coincolor = `${cColor}`
                    console.log("new node is", newNode)
                    cSection.appendChild(newNode);
                }
            }
        }
    }

    isvalidmove(){
        return true
    }

    takecoin(ev){

        console.log("YOU GOT TO TAKECOIN")
        if (isvalidmove){
            
            let new_coin_total = this.state.bank.coins[ev.target.coincolor] - 1
            this.setState(this.state.bank.coins = new_coin_total)

            console.log("event is ", ev)
            let coin = document.createElement('div');
            coin.className = `coin-${cColor}`;
            coin.style.width = '200px';
            coin.style.length = '200px';
            let showsection = document.querySelectorAll("section[class^='coin-show']")
            showsection.appendChild(coin)
        }
    }
    render(){
        return(
            <div>
                
                <div className="div1"> 
                <ToolBar />
                <PlayerHand />
                
                <Overlay takecoin={this.takecoin} isvalidmove={this.isvalidmove}/>
              
                </div>
            </div>
        );
    }
}

export default TeslaHero