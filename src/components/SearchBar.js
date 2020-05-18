import React from 'react'

class SearchBar extends React.Component{
    state = {term : ''}

    onFormSubmit = event =>{
        event.preventDefault();
        let k = this.state.term
        console.log(k)
        this.props.onSearchSubmit(this.state.term)
    }

    render(){
        return(
            <div className="ui segment" style={{margin:10}}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search Image</label>
                        <input 
                            type="text"
                            placeholder="E.g. Cars..."
                            value={this.state.term}
                            onChange={e => this.setState({term:e.target.value})}
                        ></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar