import React, { Component } from 'react'
import img1 from '../components/assets/img1.png';
 
 class Home extends Component {
    render() {
        return (
            <div>
                
                <div className="img_1">
            <img className="img1" src={img1} alt='mypet' />
          </div>
            </div>
        )
    }
}
export default Home;