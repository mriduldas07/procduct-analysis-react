import React from 'react';
import './Home.css'
import img from '../../image.png'




const Home = () => {
    
    return (
        <div>
            <div className='home-container'>
            <div className="home-text">
                <h1 id='first-h1'>Welcome to the knowledge of Books</h1>
                <h1 id='second-h1'>The ultimate power of Straggle</h1>
                <p>Millions are out of work and a drought has broken the Great Plains. Farmers are fighting to keep their land and their livelihoods as the crops are failing, the water is drying up, and dust threatens to bury them all. One of the darkest periods of the Great Depression, the Dust Bowl era, has arrived with a vengeance.</p>
                <button>Live demo</button>
            </div>
            <div className="home-img">
                <img src={img} alt="" />
            </div>
            </div>
            <div className="customar-review">
                <h2>Customer Review(3)</h2>
                
            </div>
        </div>
    );
};

export default Home;
