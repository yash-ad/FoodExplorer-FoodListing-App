import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="about-us-page">
        <div className="about-page-left">
          <img src="https://gimmeyummy.com/wp-content/uploads/2022/06/Sedurra-dessert-scaled.jpg" alt="" />
        </div>
        <div className="about-page-right">
          <h1>About FoodExplorer</h1>
          <p>Discover culinary excellence with FoodExplorer, your premier destination for extraordinary dining. We curate top-tier local eateries, offering diverse cuisines through an easy-to-use platform. Enjoy seamless ordering, swift deliveries, and a celebration of flavors at every meal. Welcome to FoodExplorer - where exceptional dining is just a click away!</p>
          <Link to={"/"}><button>Explore More</button></Link>
        </div>
      </div>
    </div>
  );
};

export default About;




