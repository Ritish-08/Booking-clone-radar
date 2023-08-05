import "./propertyList.css"

const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src="https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" alt="" className="pListImg hotel" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>833 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max300/441253808.jpg?k=1a717f9306648330f0a22df27680d7e74d3a2de9305ae414f01077600af6a960&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>670 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max300/295176746.jpg?k=17f18b97ed17df088784027f960acb1ebbe438727f0f2ff1750705be6728f7fd&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>452 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.assettype.com/fortuneindia%2F2021-09%2F933967f8-afcb-4155-ba3d-b5189587306f%2FLuxury_villas_1.jpg?w=1250&q=60" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>270 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://ychef.files.bbci.co.uk/624x624/p0b36gvt.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>240 hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList