/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar, Footer } from './components/Layout';
import { AgeVerification } from './components/AgeVerification';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Checkout } from './pages/Checkout';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-black">
          <AgeVerification />
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="bottom-right" toastOptions={{
            style: { background: '#171717', color: '#fff', border: '1px solid #262626' }
          }} />
        </div>
      </Router>
    </CartProvider>
  );
}
