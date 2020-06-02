import React, { Component } from 'react'
import img1 from '../components/assets/img1.jpeg';
 
 class Home extends Component {
    render() {
        return (
            <div>
               <h2 > Unconditional love is as close as your nearest shelter</h2> 
                <div className="img_1">
            <img className="img1" src={img1} alt='mypet' />
            
          </div>
            </div>
        )
    }
}
export default Home;