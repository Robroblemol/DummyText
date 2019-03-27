import React,{Component} from 'react'

export default class App extends Component {
    constructor(props){
        super(props)
            this.state = {
                paragraphs: 3,
                results:[],
            }
        this.handleChange = this.handleChange.bind(this);

        const url = 'https://baconipsum.com/api/?type=meat-and-filler&paras='+this.state.paragraphs;
        fetch(url)
            .then((response)=> { //usar arow funtion para evitar el contexto local
                return response.json();
            })
            .then((myJson) =>{
                 console.log(myJson);
                 this.setState({results:myJson})
             });
    }  
    handleChange(ev){
        this.setState({paragraphs: ev.target.value});
        
    }      
    render(){
       return <div id = "dummy-container">
            <h1>Generador Texto Dummy</h1>
            <div id = "dumy-text-result">
                {this.state.results.map((paragraphText, index) => {
                    return <p key= {index}>{paragraphText}</p>
                })}
            </div>
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