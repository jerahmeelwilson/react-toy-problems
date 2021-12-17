import React, {useState} from 'react'

export default function Sum() {
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [sum, setSum] = useState("");

    function handleInput(event) {
        if(event.target.id === 'number1'){
            setNumber1(event.target.value)
        } else{
            setNumber2(event.target.value)
        }
    }

    function solveInput(event){
        event.preventDefault();
        let newSum = parseInt(number1) + parseInt(number2);
        setSum(newSum);
    }


    return (
        <div className='puzzleBox sumPB'>
            <h4>Sum</h4>
            <input id='number1' onChange={handleInput} className='inputLine' value={number1} type='number'></input>
            <input id ='number2' onChange={handleInput} className='inputLine' value={number2}type='number'></input>
            <button onClick={solveInput}className='confirmationButton'>Sum</button>
            <span className='resultsBox'>Sum: {sum}</span>
        </div>
    )
}





// import React, { Component } from 'react'

// export default class Sum extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             number1: "",
//             number2: "",
//             sum: ""
//         }

//         this.handleInput = this.handleInput.bind(this);
//         this.solveInput = this.solveInput.bind(this);
//     }

//     handleInput(event){
//        if(event.target.id === 'number1'){
//            this.setState({number1:event.target.value})
//        } else{
//            this.setState({number2:event.target.value})
//        }
//     }

//     solveInput(event){
//         event.preventDefault();
//         let newSum = parseInt(this.state.number1) + parseInt(this.state.number2);
//         this.setState({sum:newSum})
//     }

//     render() {
//         return (
//             <div className='puzzleBox sumPB'>
//                 <h4>Sum</h4>
//                 <input id='number1' onChange={this.handleInput} className='inputLine' value={this.state.number1} type='number'></input>
//                 <input id ='number2' onChange={this.handleInput} className='inputLine' value={this.state.number2}type='number'></input>
//                 <button onClick={this.solveInput}className='confirmationButton'>Sum</button>
//                 <span className='resultsBox'>Sum: {this.state.sum}</span>
//             </div>
//         )
//     }
// }
