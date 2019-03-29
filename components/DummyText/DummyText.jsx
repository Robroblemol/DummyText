import React,{Component} from 'react'

export default class App extends Component {
    constructor(props){
        super(props)
            this.state = {
                isLoading: true,
                paragraphs: 3,
                results:[],
            }
        this.handleChange = this.handleChange.bind(this);
    }  

    componentDidMount(){
        this.fetchText();
    }

    fetchText(){
        const url = 'https://baconipsum.com/api/?type=meat-and-filler&paras='+this.state.paragraphs;
        fetch(url)
            .then((response)=> { //usar arow funtion para evitar el contexto local
                return response.json();
            })
            .then((myJson) =>{ //usar arow funtion para evitar el contexto local
                 console.log(myJson);
                 this.setState({
                     results:myJson,
                     isLoading: false,
                    })
             });
    }

    handleChange(ev){
       // this.setState({paragraphs: ev.target.value}); // asi seria la forma normal
       // this.fetchText();//el problema es que carga los valores anteriores

       //de esta manera se ejecutan al mismo tiempo
       this.setState({paragraphs: ev.target.value},() => {
           this.fetchText();
       });
    }   
    
    displayResult(){
        if(this.state.isLoading){
            return <p>Loading...</p>
        }else{
            return this.state.results.map((paragraphText, index) => {
                return <p key= {index}>{paragraphText}</p>
            }) 
        }
       
    }
    render(){
       return <div id = "dummy-container">
            <h1>Generador Texto Dummy</h1>

            <div id = "dumy-text-controls">
                <h2>Opciones tiempo real:</h2>
              <p>
                Parrafos:
              </p>  
                <input type= "number" 
                       min ="1" 
                       value = {this.state.paragraphs} 
                       onChange = {this.handleChange}
                       />
            </div>

            <div id = "dumy-text-result">
                {this.displayResult()}
            </div>
            
       </div> 
    }
}