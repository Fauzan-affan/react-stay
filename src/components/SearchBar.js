import React from 'react'

class SearchBar extends React.Component {
    
    state = {
        inputText: 'Hi Noob!'
    }

    handleInputChange = (e) => {
        const newInput = e.target.value
        this.setState({
            inputText: newInput
        })
    }

    handleSearchBarSubmit = (e) => {
        e.preventDefault()
        // ngoper state ke parent component
        this.props.onSubmit(this.state.inputText);
    }
    
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.handleSearchBarSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.inputText} onChange={this.handleInputChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar