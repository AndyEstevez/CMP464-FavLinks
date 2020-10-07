import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */
        this.state = {
            name: "",
            URL: ""
        }

    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
       this.setState({
           [event.target.name]: event.target.value
       })
        // console.log("Name is updated: " + this.state.name)
        // console.log("URL is updated: " + this.state.URL)
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
    //    console.log("Submit Function: name = " + this.state.name)
        let value = this.state
        console.log("Value:" + value.name)
        this.props.handleSubmit(value)
        this.setState({
            name: '',
            URL: ''
        })
     
    }

    

    render() {

        return(
            <form>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
              <h1>Name</h1>
              <input value={this.state.name} name="name" onChange={event => this.handleChange(event)} type="text"/>
              <h1>URL</h1>
              <input value={this.state.URL}  name="URL" onChange={event => this.handleChange(event)} type="text"/>
              <button type="submit" onClick={this.onFormSubmit}>Submit</button>
            </form>
        )
    
    }
}

export default Form;
