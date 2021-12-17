//import React, { Component } from 'react';
import React, { useState} from 'react';

function EvenAndOdd() {
    const [inputValue, setInputValue] = useState("");
    const [evenArr, setEvenArr] = useState([]);
    const [oddArr, setOddArr] = useState([]);
    
    function handleInput(event){
        setInputValue(event.target.value);
    }

    function solveInput(event){
        event.preventDefault();
        let nums = inputValue.split(',');
        let evens = [];
        let odds = [];
        console.log(nums)
        nums.forEach(num =>{  
            if(num !== "")
                num = parseInt(num,10);    
            if(!(isNaN(num) || typeof num !== "number")){
                if(num%2 === 0){
                    evens.push(num);
                } else{
                    odds.push(num);
                }
            } 
        })
        setEvenArr(evens.toString());
        setOddArr(odds.toString());
        setInputValue("")
    }

    return(
        <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input onChange={handleInput} value={inputValue} className='inputLine' />
            <button onClick={solveInput} className='confirmationButton'>Split</button>
            <span className='resultsBox'>Evens:[{evenArr}]</span>
            <span className='resultsBox'>Odds:[{oddArr}]</span>
        </div>
    )
}

// class EvenAndOdd extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             evenArray: [],
//             oddArray: [],
//             userInput: ""
//         }
//         this.handleInput = this.handleInput.bind(this);
//         this.solveInput = this.solveInput.bind(this);
//     }

//     handleInput(event){
//         this.setState({userInput: event.target.value})
//     }

//     solveInput(event){
//         event.preventDefault();
//         let nums = this.state.userInput.split(',');
//         let evens = [];
//         let odds = [];
//         console.log(nums)
//         nums.forEach(num =>{  
//             if(num !== "")
//                 num = parseInt(num,10);    
//             if(!(isNaN(num) || typeof num !== "number")){
//                 if(num%2 === 0){
//                     evens.push(num);
//                 } else{
//                     odds.push(num);
//                 }
//             } 
//         })
//         this.setState({evenArray: evens.toString()});
//         this.setState({oddArray: odds.toString()});
//         this.setState({userInput:""});
        
//     }

//     render(){
//         return(
//             <div className="puzzleBox evenAndOddPB">
//                 <h4>Evens and Odds</h4>
//                 <input className='inputLine' value={this.state.userInput} onChange={this.handleInput} />
//                 <button onClick={this.solveInput} className='confirmationButton'>Split</button>
//                 <span className='resultsBox'>Evens: [{this.state.evenArray}]</span>
//                 <span className='resultsBox'>Odds: [{this.state.oddArray}]</span>
//             </div>
//         )
//     }
// }


export default EvenAndOdd;