import React, { Component } from 'react'

class MyCart extends Component {
       
        constructor(props) {
            super(props);
            this.state = { 
                cart : [] 
             }

             this.clear = this.clear.bind(this);
             this.removefromcart = this.removefromcart.bind(this);

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
    
    removefromcart(breed){

        alert(breed);

        localStorage.getItem('data') && this.setState({
            cart: JSON.parse(localStorage.getItem('data')),
            isLoading : false
        })
        
        this.state.cart.splice(this.state.cart.indexOf(breed),1);

           // alert(" fav pet removed to cart ",this.state.cart.length);
            localStorage.setItem('data',JSON.stringify(this.state.cart));
            //return;
            this.render();
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
                       <button onClick={this.removefromcart.bind(this,breed)}>Remove</button>

                    </div>


                ))}
                </div>

            </div>
        )
    }
}
export default MyCart;
