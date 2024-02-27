
import './App.css';
import logo from "./logo.png";
import image1 from "./1.png";
import image2 from "./2.png";
import image3 from "./3.png"
import { EarthLock, FacebookIcon, Phone } from 'lucide-react';
function App() {
  return (
    <div className="App">
    <div className='App-header'>
     <img src={logo} className="App-logo" alt="logo" />
     </div>
     <div className='container'>
      <div className='image-container'>
         <img src={image1} alt="trophy" className=''/>
      </div>
      <div className='text-container'>
        <h1 className='text-heading'> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>
         <ul>
                <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
         </ul>
         <div className='text-image-container'>
            <img  src={image2} 
            alt="image2" />
         </div>
         <div className='text-footer'>
             <p>Government of India has awarded the <span>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
         </div>
      </div>
     </div>
     <div>
      <h1 className='text-mid'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</h1>
     </div>
     <div className='mid-image'>
     <img src={image3} alt='image3'></img>
    
     </div>
     <h1 className='image-label'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </h1>
     <hr/>
     <h1 className='footer-title'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h1>
     <p className='text-footer'>CHEMICALS & PROCESS <span className=' sepertor'> | </span> POWER WATER & WASTE <span className=' sepertor'> | </span> WATER OILS & GAS  <span className=' sepertor'> | </span>PHARMA SUGARS & DISTILLERIES <span className=' sepertor'> | </span> PAPER & PULP <span className=' sepertor'> | </span>  MARINE & DEFENCE <span className=' sepertor'>  | </span>  METAL & MINING <span className=' sepertor'> | </span> FOOD & BEVERAGE<span className=' sepertor'> | </span>  PETROCHEMICAL & REFINERIES <span className=' sepertor'> | </span> SOLAR <span className=' sepertor'> | </span>  HVAC <span className=' sepertor'> | </span>FIRE FIGHTING <span className=' sepertor'> | </span> AGRICULTURE & RESIDENTIAL</p>

    <div className=' footer'>
         <span className=' footer-icon-text'><Phone className='icon'/>Toll free 1800 200 1234</span>
         <span className=' footer-icon-text'><FacebookIcon className='icon'/> www.facebook.com/cripumps</span>
         <span className=' footer-icon-text'> <EarthLock className='icon'/>www.crigroup.com</span>
    </div>

    </div>
  );
}

export default App;