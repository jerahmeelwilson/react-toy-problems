import React, {useState} from 'react'

export default function FilterString() {
    const [userInput, setUserInput] = useState("");
    const [unFilteredArray, setUnfilteredArray] = useState (
        [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ]
        )
    const [filteredArray, setFilteredArray] = useState([]);
    
    function handleInput(event){
        setUserInput(event.target.value)
    }
    function solveInput(event){
        event.preventDefault();
        let substring = userInput;
        let filtered = unFilteredArray.filter((name) => {
            return name.includes(substring);
        })
        setFilteredArray(filtered)
        setUserInput("")
    }

    return (
        <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                 <span className='puzzleText'>Names: {JSON.stringify(unFilteredArray)}</span>
                <input value={userInput} onChange={handleInput}className='inputLine'></input>
                <button className='confirmationButton' onClick={solveInput}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(filteredArray)}</span>
             </div>
    )
}


// class FilterString extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             unFilteredArray :  [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ],
//             userInput : "",
//             filteredArray : []
//         }
//         this.handleInput = this.handleInput.bind(this);
//         this.solveInput = this.solveInput.bind(this);
//     }
        
//     handleInput(event){
//         this.setState({userInput:event.target.value});
//     }
//     solveInput(event){
//         event.preventDefault();
//         let substring = this.state.userInput;
//         let filtered = this.state.unFilteredArray.filter((name) => {
//             return name.includes(substring);
//         })
//         this.setState({filteredArray: filtered})
//     }
    

//     render(){
//         return(
//             <div className='puzzleBox filterStringPB'>
//                 <h4>Filter String</h4>
//                 <span className='puzzleText'>Names: {JSON.stringify(this.state.unFilteredArray)}</span>
//                 <input value={this.state.userInput} onChange={this.handleInput}className='inputLine'></input>
//                 <button className='confirmationButton' onClick={this.solveInput}>Filter</button>
//                 <span className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>
//             </div>
//         )
//     }
// }


