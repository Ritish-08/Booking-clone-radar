import "./SearchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://i0.wp.com/ihaviationandtravel.com/wp-content/uploads/2020/12/img_3783.jpg?resize=580%2C326&ssl=1" alt="" className="siImg" />
     <div className="siDesc">
        <h1 className="siTitle">WelcomHotel by ITC</h1>
        <span className="siDistance">500m form Center</span>
        <span className="siTaxiOp">Free Airport Taxi</span>
        <span className="siSubtitle">Outdoor balconies offering gorgeous Views</span>
        <span className="siFeatures">Entire room 2 bathroom 1 hall 2 21m2 Fullbed</span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">You can Cancel later, so lock in this with great price today!</span>
     </div>
       <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">Rs 7899</span>
            <span className="siTaxOp">Include Taxes And Fees</span>
            <button className="siCheckButton"><a href="http://localhost:3000/hotels/id">Availability</a></button>
        </div>
       </div>
    </div>
  )
}

export default SearchItem