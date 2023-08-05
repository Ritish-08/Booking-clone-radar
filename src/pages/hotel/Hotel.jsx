import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './hotel.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const Hotel = () => {
  const [slideNumber,setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos =[
    {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/271246244.jpg?k=126eeda41dbaf80f190f5572c728fc565d90d0a46f890043619a91f40b83efb6&o=&hp=1"
    },
    {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/271246547.jpg?k=6e661270179198a9a1880c80cf57a8424a4bfe18071d25a3af5a30eea4568311&o=&hp=1"
    },
    {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/229518282.jpg?k=8f129b7503ef9d33cd1ec655121f8fc474655b7c4be41491f2a219da25d06dbb&o=&hp=1"
    },
    {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/477257008.jpg?k=77ca350f2eaa521379ed52f0655cd524eb87394e57d9f4bc056cb82dc0e1d7ac&o=&hp=1"
    },
    {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/229518255.jpg?k=19e0af9a1c2d9b09ddd8141a3516a6f40983867ec5c0996fb695bfeb7f2126b5&o=&hp=1"
    },
    {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/477256998.jpg?k=a1ec55834fb1b5deefe77bb564d163293fd6611225c31d17f26d0973ae65c474&o=&hp=1"  
    },
  ];
  const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true);
  }
  const handleMove = (Direction)=>{
    let newSlideNumber;
    if(Direction==="l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    }
    else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber +1;
    }
    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="Arrow" onClick={()=> handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="Arrow" onClick={()=> handleMove("r")}/>
          </div>}
          <button className="Book">Reserve or Book Now</button>
          <h1 className="hotelTitle">Welcomhotel by ITC Hotels, Shimla</h1>
          <div className="hotelAddress"><span>
            📍 Village Patengali, Tarapur, Naldhera Golf Course Road, Mashobra, 171007 Shimla, India -
            </span>
             </div>
          <span className="hotelDistance">
            500m from the center
            </span>
          <span className="hotelPriceHighlight">
            Book a stay over Rs7899 and get a free Airport Taxi
            </span>
            <div className="hotelimage" >
           {photos.map((photo,i)=>(
            <div className="hotelImageWrapper">
            <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
            </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Get the celebrity treatment with world-class service at Welcomhotel by ITC Hotels, Shimla</h1>
              <p className="hotelDesc">
              Situated in Shimla, 12 km from The Mall Road,Welcomhotel by ITC Hotels, Shimla, features accommodation with a restaurant, free private parking, 
              a fitness centre and a bar. Among the facilities at this property are a 24-hour front desk and room service, along with free WiFi throughout the property. 
              Guests can make use of a garden.
             All rooms are fitted with air conditioning, a flat-screen TV with satellite channels, 
             a kettle, a shower, a hairdryer and a desk. At the hotel the rooms have a wardrobe and a private bathroom.
            Guests at Welcomhotel by ITC Hotels, Shimla, can enjoy a buffet or a à la carte breakfast. You can play billiards 
            and darts at the accommodation, and car hire is available.
            Victory Tunnel is 11 km from Welcomhotel  By ITC Hotels Shimla, while Circular Road is 9 km from the property. 
            The nearest airport is Shimla Airport, 30 km from the hotel.
            Couples particularly like the location — they rated it 8.5 for a two-person trip.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>📍 Top location: Highly rated by recent guests (8.9)</span>
              <span> 🅿️ Free private parking available at the hotel</span>
                    <h2><bold>Rs 62999</bold></h2>
                    <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <MailList/>
      <Footer />
    </div>
  )
}

export default Hotel