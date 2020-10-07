import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        /* TODO - Create state object for storing favLinks */
        this.state = {
            linkData: ["GitHub", "www.github.com"],
            favLinks: [],
            
        }
    }
   
    removeCharacter = index => {
        /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
       this.state.favLinks.filter(index)
       this.setState({
           favLinks: this.state.favLinks
       });
       
    }

    handleSubmit = favLink => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
       console.log("In handle Submit function: " + favLink.URL + " " + favLink.name)
      
       this.setState({
            //favLinks: this.state.favLinks.push(favLink): push function doesn't work
           favLinks: this.state.favLinks.concat(favLink)
       })
       console.log(this.state.favLinks[1])
     

      
    }

    handleRemove = removeLink => {
        //this.state.favLinks.filter(removeLink)
        
        const newArray = this.state.favLinks.filter(remove => {
            return remove !== removeLink
        })
        this.setState({
            favLinks: [...newArray]
        })
    }

   

    render() {
        
        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
            
                <Table linkData={this.state.favLinks} removeLink={this.handleRemove}/>
                <br/>

                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default LinkContainer;