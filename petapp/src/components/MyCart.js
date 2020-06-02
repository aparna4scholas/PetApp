import React, { Component } from 'react'

class MyCart extends Component {
       
        constructor(props) {
            super(props);
            this.state = { 
                cart : [] 
             }

             this.clear = this.clear.bind(this);
        }

        componentWillUnmount(){
            this.state.cart = [];
        }

        componentWillMount(){
            
            localStorage.getItem('data') && this.setState({
                cart: JSON.parse(localStorage.getItem('data')),
                isLoading : false
            })
           
        }
    clear(){
        alert('clear');
        localStorage.removeItem("data");

    }


    render() {
        return (
            <div>
                <button onClick={this.clear}> clear cart</button>
                <div className="sss">
                {this.state.cart.map((breed) => (
                    <div >
                       <img id={breed} name={breed} className="imagebox" src={breed} alt="No value" value={breed}/>
                       
                    </div>


                ))}
                </div>

            </div>
        )
    }
}
export default MyCart;
{/*
import Books from './Books.js'
import React, { Component } from 'react';

class Savebooks extends Component {
    state = { 
        favBooks : []
    }

    componentWillMount(){
        //alert(localStorage.getItem('data'));
       // this.state.favBooks = JSON.parse(localStorage.getItem('data'));
        localStorage.getItem('data') && this.setState({
            favBooks: JSON.parse(localStorage.getItem('data')),
            isLoading : false
        })
        alert(this.state.favBooks.length);
        //this.getData();
    }
render() {
    return (
        <div className="div_class">
           <h2> My Favourite Books </h2>  
            {this.state.favBooks.map((book) => (
                <div className="results-container">
                    <table class="table table-dark">
                        <thead>
                            <th scope="col">Book</th>
                            <th scope="col">Title</th>
                        </thead>
                        <tr scope="row">
                        <td>{<img id={book._id} src={book.url} alt="No value" />}</td>
                        <td class="text-white-50 align-text-bottom" >{book.title}
                        </td>
                        </tr>
                    </table>
                </div>
            ))}
        </div>

)
}
}

export default Savebooks;*/}
