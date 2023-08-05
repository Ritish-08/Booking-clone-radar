import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">
     <div className="fpItems">
        <img src="https://assets.architecturaldigest.in/photos/63a458428df6b9fdb924d64c/3:2/w_1620,h_1080,c_limit/SaffronStays%20Monarch%20Manor1.png" alt="" className="fpImg" />
        <span className="fpname">The Hygge House</span>
        <span className="fpcity">Himachal Pradesh, Raison</span>
        <span className="fpprice">Starting from 6k per Night</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
     </div>
     <div className="fpItems">
        <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2016/08/Grand-Hyatt-Goa.jpg" alt="" className="fpImg goa" />
        <span className="fpname">Grand Hyatt Goa</span>
        <span className="fpcity">Goa, Bambolim</span>
        <span className="fpprice">Starting from 5k per Night</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
     </div>
     <div className="fpItems">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/0b/3f/18/exterior.jpg?w=1200&h=-1&s=1" alt="" className="fpImg" />
        <span className="fpname">Le Méridien</span>
        <span className="fpcity">Rajasthan, Jaipur</span>
        <span className="fpprice">Starting from 9k per Night</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
     </div>
     <div className="fpItems">
        <img src="https://assets.architecturaldigest.in/photos/63a4573ccdb6a499ebcee9e7/master/w_1600,c_limit/AraiyaPalampur_Terrace_9825.jpg" alt="" className="fpImg" />
        <span className="fpname">Hyatt Regency Dharamshala</span>
        <span className="fpcity">Himachal Pradesh, Dharamshala</span>
        <span className="fpprice">Starting from 3.5k per Night</span>
        <div className="fpRating">
            <button>8.4</button>
            <span>Excellent</span>
        </div>
     </div>
    </div>
  )
}

export default FeaturedProperties