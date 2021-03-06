import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../App.css"
const API_URL = 'https://dog.ceo/api';
const API_URL_ak = 'https://dog.ceo/api/breed/hound/images/random/3';


 class Adopt extends Component {
    
    
    constructor(props) {
        super(props);
     this.getData = this.getData.bind(this);
     
     this.state = { 
        breedtype : '',
        allBreeds: [],
        cart : [],
        breeds : ['hound','african','airedale','akita','appenzeller','australian','basenji'],
        
        
    }
    this.handleChange = this.handleChange.bind(this);
    this.adoptme = this.adoptme.bind(this);
    }
    componentDidMount() {
        this.getData();

        localStorage.getItem('data') && this.setState({
            cart: JSON.parse(localStorage.getItem('data')),
            isLoading : false
        })
    }
    getData(value) {
        const url = `${API_URL}/breed/`+value+`/images`;
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ allBreeds: data.message })
            })
    }
    adoptme(breed){

       // alert(breed);

        localStorage.getItem('data') && this.setState({
            cart: JSON.parse(localStorage.getItem('data')),
            isLoading : false
        })
        
            this.state.cart.push(breed);
            
            alert(" fav pet added to cart ",this.state.cart.length);
            localStorage.setItem('data',JSON.stringify(this.state.cart));
            this.componentDidMount();
        }
    

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

         this.getData(value);
      }

    render() {

        let options = this.state.breeds.map((data) => 
        <option key={data}>{data}</option>
            );

        return (
            <div>
                Breeds :
                <select name="breedtype" id="breedtype" onChange={this.handleChange}>
                    {options} 
             </select>
                <div className="wrapper">
                {this.state.allBreeds.map((breed) => (
                    <div className="wrapper1">
                       <img id={breed} name={breed} className="imagebox" src={breed} alt="No value" value={breed}/>
                       {/* <button onClick={this.adoptme}>Adopt Me </button> */}
                       <button onClick={this.adoptme.bind(this,breed)}>Add to Cart</button>

                    </div>


                ))}
                </div>


            </div>
        )
    }
}
export default Adopt;






    





