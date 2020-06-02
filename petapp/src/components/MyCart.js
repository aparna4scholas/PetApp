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
    checkout(){
        alert('checkout');
      

    }


    render() {
        return (
            <div>
                <button onClick={this.clear}> clear cart</button>
                <button onClick={this.checkout}> checkout</button>
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
