import React,{ Component } from 'react';
import './Board.css';
import Box from './Box';
import './Box.css';

class Board extends Component{
    constructor(props){
        super(props);
        this.state={
            currentPlayer:"X"
        }
    }

    render(){
        return(
            <div className="Board">
            {
                [...Array(9)].map((v,index)=>{
                    return <Box value={""}
                       key={index}
                       changePlayer={() => this.changeCurrentPlayer()}
                       currentPlayer={this.state.currentPlayer}
                       />
                })
            }
               
            </div>
        )
    }

    changeCurrentPlayer(){
        let nextPlayer;
        nextPlayer=this.state.currentPlayer==="X"?'O':'X';

        this.setState({
            currentPlayer:nextPlayer
        })
        console.log(this.state.currentPlayer)
    }


}

export default Board;