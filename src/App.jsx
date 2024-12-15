import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/Register";
import { AppContext } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import CheckoutPage from "./pages/PlaceOrder";
import Redirect from "./Routes/Redirect";
import Protected from "./Routes/Protected";
import ProfilePage from "./pages/Profile-page";
import Orders from "./pages/Orders";
function App() {
  return (
    <AppContext>
      <CartProvider>
        <Router>
          <div className="flex min-h-screen max-w-screen-xl mx-auto flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Redirect />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/place-order" element={<CheckoutPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AppContext>
  );
}

export default App;
