import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
const API_URL = 'https://dog.ceo/api';
const API_URL_ak = 'https://dog.ceo/api/breed/hound/images/random/3';


 class Breedpets extends Component {
    
    
    constructor(props) {
        super(props);
     this.getData = this.getData.bind(this);
     
     this.state = { 
        breedtype : '',
        allBreeds: [],
        cart : [],
        breeds : ['hound','hound-afgan','african'],
        
    }
    this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.getData();
    }
    getData(value) {
        const url = `${API_URL}/breed/`+value+`/images`;
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ allBreeds: data.message })
            })
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
         this.setState({
             breedtype : value
         })
         this.getData(value);
      }

    render() {

        let options = this.state.breeds.map((data) => 
        <option key={data}>{data}</option>
            );

        return (
            <div>
                <select name="breedtype" id="breedtype" onChange={this.handleChange}>
                    {options}
             </select>

                <div>
                {this.state.allBreeds.map((breed) => (
                    <div>
                       <img id={breed} src={breed} alt="No value" />} 
                    </div>

                ))}
                </div>


            </div>
        )
    }
}
export default Breedpets;
{ /*





    




saveBook(bookId,url,title){
    alert('save book title'+title);
    this.state.favBooks.push({
       '_id' : bookId,
       'url': url,
       'title':title
    })
    alert(" fav books added ",this.state.favBooks.length);
    localStorage.setItem('data',JSON.stringify(this.state.favBooks));
    return;
}
   getData() {
        const url = `${API_URL}/users/`;
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ books: data.books })
            })
    }
    render() {

        return (
                <div className="div_class">
                    {this.state.books.map((book) => (
                        <div className="results-container">
                            <table class="table table-dark">
                                <thead>
                                    <th scope="col">Book</th>
                                    <th scope="col">Title</th>
                                </thead>
                                <tr scope="row">
                                <td>{<img id={book._id} src={book.images.front.l.url} alt="No value" />}</td>
                                <td class="text-white-50 align-text-bottom" >{book.title}<br>
                                </br>${book.price} 
                                  <button onClick={this.saveBook.bind(this,book._id,book.images.front.l.url,book.title)}>Save</button>
                                </td>
                                </tr>
                            </table>
                        </div>
                    ))}
                </div>

        )
    }

}

export default Books;*/
}