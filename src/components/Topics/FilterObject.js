//import React, { Component } from 'react';
import React, { useState} from 'react';

function FilterObject() {
    const [inputValue, setInputValue] = useState("");
    const [unFilteredArray, setUnfilteredArray] = useState (
        [{ "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" },{ "name": "Carly Armstrong", "title": "CEO" }]
        )
    const [filteredArray, setfilteredArray] = useState([]);
    
    function handleInput(event){
        setInputValue(event.target.value)
    }
    function solveInput(event){
        event.preventDefault();
        let filter = inputValue;
        let filtered = unFilteredArray.filter((element) => {
            return element.hasOwnProperty(filter);
        })
        setfilteredArray(filtered)
        setInputValue("");
    }

    return ( 
        
        <div className='puzzleBox filterObjectPB'>
            <h4>Filter Object</h4>
            <span className='puzzleText'>Original: {JSON.stringify(unFilteredArray)}</span>
            <input value={inputValue}onChange={handleInput} className='inputLine'/>
            <button onClick={solveInput}className='confirmationButton'>Filter</button>
            <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(filteredArray)}</span>
        </div>)
}

// [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, 
//   { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, 
//   { "name": "Carly Armstrong", "title": "CEO" } ]
// class FilterObject extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//            unFilteredArray : [{ "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, 
//            { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" },
//            { "name": "Carly Armstrong", "title": "CEO" }],
//            userInput : "",
//            filteredArray : []
//         }
//         this.handleInput = this.handleInput.bind(this);
//         this.solveInput = this.solveInput.bind(this);
//     }

//     handleInput(event){
//         this.setState({userInput:event.target.value});
//     }
//     solveInput(event){
//         event.preventDefault();
//         let filter = this.state.userInput;
//         let filtered = this.state.unFilteredArray.filter((element) => {
//             return element.hasOwnProperty(filter);
//         })
//         this.setState({filteredArray:filtered});
//     }
    
//     render(){
//         return ( 
//             <div className='puzzleBox filterObjectPB'>
//                 <h4>Filter Object</h4>
//                 <span className='puzzleText'>Original: {JSON.stringify(this.state.unFilteredArray)}</span>
//                 <input value={this.state.userInput}onChange={this.handleInput} className='inputLine'/>
//                 <button onClick={this.solveInput}className='confirmationButton'>Filter</button>
//                 <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
//             </div>)
//     }
// }


export default FilterObject;