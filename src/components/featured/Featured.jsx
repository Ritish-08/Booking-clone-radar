import "./featured.css"


const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" className="featuredImg" />
            <div className="featuredTitles">
            <h1>Goa</h1>
            <h2>476 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://im.rediff.com/300-300/getahead/2018/jan/22himachal-pradesh1.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
            <h1>Himachal Pradesh</h1>
            <h2>432 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/55/cb/65/caption.jpg?w=300&h=300&s=1" alt="" className="featuredImg" />
            <div className="featuredTitles">
            <h1>Rajasthan</h1>
            <h2>321 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured