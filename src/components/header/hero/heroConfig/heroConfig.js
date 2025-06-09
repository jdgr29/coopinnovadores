import BackgroundHome from "../../assets/heroImg1.png";
import BackgroundRegister from "../../assets/register.jpg";
import BackgroundAbout from "../../assets/aboutUs.jpg";

const Home = { // Keep Home as an object for the specific check in HeroSection.js
  title: "Coopinnovadores",
  text: "Bienvenido a la Cooperativa de Ahorro y Crédito Innovadores.",
  img: BackgroundHome,
  logo: true,
  page: "Home"
};

// Change these to strings using their previous 'title' values
const register = "Únete a Nosotros";
const About = "¿Quiénes Somos?";
const Programas = "Nuestros Programas";

const heroConfig = { Home, register, About, Programas };
export default heroConfig;
