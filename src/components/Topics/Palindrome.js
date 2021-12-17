import React, {useState} from 'react'

export default function Palindrome() {
    const [userInput, setUserInput] = useState("");
    const [palindrome, setPalindrome] = useState("");

    function handleInput(event){
        setUserInput(event.target.value)
    }

    function solveInput(event){
        event.preventDefault();
        let phrase = userInput;
        let palin = [...phrase.replace(/[^a-zA-Z]/g, "")].reverse().join("") === phrase.replace(/[^a-zA-Z]/g, "");
        setPalindrome(`${palin}`);
        setUserInput("")
    }

    return (
    <div className="puzzleBox palindromePB">
        <h4>Palindrome</h4>
        <input onChange={handleInput} value={userInput}className='inputLine'></input>
        <button onClick={solveInput}className='confirmationButton'>Check</button>
        <span className='resultsBox'>Palindrome: {palindrome}</span>
    </div>
    )
}

//import React, { Component } from 'react';

// function EvenAndOdd() {
//     return(<p>EvenAndOdd</p>)
// }

// class Palindrome extends Component{
//     constructor(props){
//         super(props)
//         this.state ={
//             userInput: "",
//             palindrome:"",
//         }
//         this.handleInput = this.handleInput.bind(this);
//         this.solveInput = this.solveInput.bind(this);
//     }

//     handleInput(event){
//         this.setState({userInput: event.target.value});
//     }

//     solveInput(event){
//         event.preventDefault();
//         let phrase = this.state.userInput;
//         let palin = [...phrase.replace(/[^a-zA-Z]/g, "")].reverse().join("") === phrase.replace(/[^a-zA-Z]/g, "");
//         console.log(palin);
//         this.setState({palindrome:`${palin}`});
//         this.setState({userInput:""})
//     }

//     render(){
//         return(
//             <div className="puzzleBox palindromePB">
//                 <h4>Palindrome</h4>
//                 <input onChange={this.handleInput} value={this.state.userInput}className='inputLine'></input>
//                 <button onClick={this.solveInput}className='confirmationButton'>Check</button>
//                 <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
//             </div>
//         )
//     }
// }


// export default Palindrome;