import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import { useNavigate } from "react-router-dom";
const Header = ({type}) => {
  const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const [openOptions, setOpenOptions] = useState(false);
      const [options, setOptions] = useState({
          adult: 1,
          children: 0,
          room: 1,
        });
        const navigate = useNavigate()
      const handleOption = (name,operation) => {
        setOptions((prev) => {
            return{
                ...prev,
                [name]: operation = "i" ? options[name] + 1 : options[name] - 1,
            };
        });
      };
      const handleSearch = ()=>{
        navigate("/hotels",{state:{destination,date,options}});
      }
  return (
    <div className="header">
      <div className={type==="list" ? "headerContainer listMode" :"headerContainer"}>
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>AirPort Taxis</span>
            </div>
        </div>
       { type !== "list" &&
        <> <h1 className="headerTitle">A lifeTime of Discount ? It's Genius</h1>
        <p className="headerdesc">Get Rewarded for your travels - unlock instant saving of
        10% or more with a free RoamingRadar account</p>
        <button className="headerBtn">Sign/Register</button>
        <div className="headerSearch">
            <div className="headerSearchitem">
            <FontAwesomeIcon icon={faBed} className="headerIcon"/>
            <input type="text" placeholder="Where are you going?" className="headerSearchInput"
            onChange={e=>setDestination(e.target.value)}
            />
            </div>
            <div className="headerSearchitem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
            <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{format(date[0].startDate,"MM/dd/yyyy")} to {format(date[0].endDate,"MM/dd/yyyy")}</span>
            {openDate && <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
            />}
            </div>
       
            <div className="headerSearchitem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
            <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText"> {options.adult} adult . {options.children} children . {options.room} room</span> 
        
            {openOptions && <div className="options">
                <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                    <button className="optionCounterButton" Onclick={()=>handleOption("adult","d" )}> - </button>
                    <span className="optioncounterNumber"> {options.adult} </span>
                    <button className="optionCounterButton"  Onclick={()=>handleOption("adult","i" )}> + </button>
                    </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                    <button className="optionCounterButton"  Onclick={()=>handleOption("children",'d')}> - </button>
                    <span className="optioncounterNumber"> {options.children} </span>
                    <button className="optionCounterButton"  Onclick={()=>handleOption("children","i")}> + </button>
                    </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                    <button className="optionCounterButton"  Onclick={()=>handleOption("Room","d")}> - </button>
                    <span className="optioncounterNumber">{options.room}</span>
                    <button className="optionCounterButton" Onclick={()=>handleOption("Room","i")}> + </button>
                    </div>
                </div>
            </div>}
            </div>
            <div className="headerSearchitem">
            <button className="headerBtn" onClick={handleSearch}> Search </button>
            </div>
        </div> </>}
      </div>
    </div>
  )
}

export default Header