import './App.css';
import { ThemeProvider } from '@mui/material';
import Homepage from './components/Home';
import theme from './theme';
import CapabilityPage from './components/capabilities/capability';
import ProductivityPage from './components/productivity/prod';
import IntegrationPage from './components/productivity/integration';
import FaqPage from './components/FAQ/faq';
import PricingPage from './components/pricing/price';
import Footer from './components/Footer/footer';
import Testimonials from './components/Testimonials/testimonial';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Homepage />
        <CapabilityPage />
        <ProductivityPage />
        <IntegrationPage />
        <FaqPage />
        <PricingPage />
        <Testimonials />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
