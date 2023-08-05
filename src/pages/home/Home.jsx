import Featured from "../../components/featured/Featured"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Navbar from "../../components/navbar/Navbar"
import PropertyList from "../../components/propertyList/PropertyList"
import Footer from "../../components/footer/Footer"
import "./home.css"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="homeContainer">
            <Featured/>
            <h1 className="homeTitle">Browse Property by Type</h1>
            <PropertyList/>
            <h1 className="homeTitle">Home Guests Love</h1>
            <FeaturedProperties/>
            <MailList/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home