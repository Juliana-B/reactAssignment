import './App.css';
import React, {useState, useEffect} from 'react';

import Header from './components/Header.js'
import Item from './components/items.js'

import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'

function App() {

  
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(true);
  const [click, setClick] = useState(false);


  const show = () =>{
     setToggle(!toggle)
   }

  useEffect(()=>{
   setTimeout(()=>{
    setLoading(false)
   }, 2000)

  }, [])

  const display = () => {
      setClick(!click)
  }


  return (
    <div className="App">
      <div className='welcome'>
      <h1> Hola Amigos</h1>
       {!loading && (
            <button onClick={show}>Display Me!</button>
       ) 
         
       }


    {loading && (
           <div>Loading...</div>
       ) 
         
       }

       
        {toggle && (
          <div>
            <h1>I am the second div</h1>
            <button onClick={display} className='welcome'>Click me to display the homepage</button>
          </div>
        )}
      </div>
  

       {click && (
           <div className='wrapper'>
           <Header/>
         <div className='app_itemsContainer'>
            <Item 
             title='Lowest Cost Solar Panel in America'
             desc='Money back guarantee'
             backgroundImg={SolarPanels}
             leftBtnTxt='ORDER NOW' 
             leftBtnLink=''
             rightBtnTxt='LEARN MORE'
             rightBtnLink=''
             twoButtons='true'
           />
           <Item 
             title='Model S'
             desc='$64,520'
             backgroundImg={ModelS}
             leftBtnTxt='CUSTOM ORDER' 
             leftBtnLink=''
             rightBtnTxt='LEARN MORE'
             rightBtnLink=''
             twoButtons='true'
          />
          <Item 
             title='Model 3'
             desc='Money back guarantee'
             backgroundImg={Model3}
             leftBtnTxt='CUSTOM ORDER' 
             leftBtnLink=''
             rightBtnTxt='LEARN MORE'
             rightBtnLink=''
             twoButtons='true'
          />
          <Item 
             title='Model X'
             desc='Money back guarantee'
             backgroundImg={ModelX}
             leftBtnTxt='CUSTOM ORDER' 
             leftBtnLink=''
             rightBtnTxt='LEARN MORE'
             rightBtnLink=''
             twoButtons='true'
          />
          <Item 
             title='Model Y'
             desc='Money back guarantee'
             backgroundImg={ModelY}
             leftBtnTxt='CUSTOM ORDER' 
             leftBtnLink=''
             rightBtnTxt='LEARN MORE'
             rightBtnLink=''
             twoButtons='true'
          />
          <Item 
             title='Solar for New Roofs'
             desc='Money back guarantee'
             backgroundImg={SolarRoof}
             leftBtnTxt='ORDER NOW' 
             leftBtnLink=''
             rightBtnTxt='LEARN MORE'
             rightBtnLink=''
             twoButtons='true'
           />
           <Item 
             title='Accessories'
             desc='Money back guarantee'
             backgroundImg={Accessories}
             leftBtnTxt='SHOP NOW' 
             leftBtnLink=''
             rightBtnTxt='LEARN MORE'
             rightBtnLink=''
             twoButtons='true'
           />
         </div>
       </div>
  
           
        )

        }
 
      
    </div>
 
  )}

export default App