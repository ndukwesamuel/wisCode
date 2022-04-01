import React from 'react'
import './home.css';

import ron from '../img/ron.jpg'

function Home() {
  return (
    <div className='Home__page'>



        <section className='home_section_1'>


        <div>
            
            <h1> will</h1>

            <img src={ron} alt="" />
    
            </div>
    
    
    
            <div>
    
                <form action="">
    
                    <div> 
                    <input type="text" name="" id="" />
                    <label htmlFor=""> First Name</label>
    
                    </div>
    
                    <div> 
                    <input type="text" name="" id="" />
                    <label htmlFor=""> Last Name</label>
    
                    </div>
    
                    <div> 
                    <input type="text" name="" id="" />
                    <label htmlFor="">  Country</label>
    
                    </div>
    
                    <div> 
                    <input type="text" name="" id="" />
                    <label htmlFor=""> School</label>
    
                    </div>
    
                </form>
    
            </div>
    
        </section>





    </div>
  )
}

export default Home