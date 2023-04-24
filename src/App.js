import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import Account from "./pages/account/Account";
import Orders from "./pages/details/Orders";
import VouchersPage from "./pages/vouchers/VouchersPage";
import About from "./components/headerlinks/About";
import ContactPage from "./pages/navdotlinks/ContactPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/myaccount" element={<Account />} />
          <Route path="/myorders" element={<Orders />} />
          <Route path="/vouchers" element={<VouchersPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <FooterRouter />
      </Router>
    </div>
  );
}

function FooterRouter() {
  const location = useLocation();
  const showFooter = location.pathname === "/";
  return showFooter ? <Footer /> : null;
}

export default App;
