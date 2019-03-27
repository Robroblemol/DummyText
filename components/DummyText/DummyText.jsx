import React,{Component} from 'react'

export default class App extends Component {
    constructor(props){
        super(props)
            this.state = {
                paragraphs: 5,
            }
        this.handleChange = this.handleChange.bind(this);
    }  
    handleChange(ev){
        this.setState({paragraphs: ev.target.value});
    }      
    render(){
       return <div id = "dummy-container">
            <h1>Generador Texto Dummy</h1>
            <div id = "dumy-text-result"></div>
            <div id = "dumy-text-controls">
                <h2>Opciones tiempo real:</h2>
              <p>
                Parrafos:
              </p>  
                <input type= "number" 
                       value = {this.state.paragraphs} 
                       onChange = {this.handleChange}
                       />
            </div>
       </div> 
    }
}