import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Foods from './components/Foods'
import Category from './components/Category'

function App() {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [activeType, setActiveType] = useState('all')
  const [activePrice, setActivePrice] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const scrollToMenu = () => {
    document.getElementById('foods-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const addToCart = (item) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      }
      return [...currentCart, { ...item, quantity: 1 }]
    })
    setShowCart(true)
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const priceMap = { $: 1, $$: 2, $$$: 3, $$$$: 4 }
  const cartSubtotal = cart.reduce((total, item) => total + (priceMap[item.price] ?? 0) * item.quantity, 0)

  const removeFromCart = (itemId) => {
    setCart((currentCart) => currentCart.filter((cartItem) => cartItem.id !== itemId))
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(251,146,60,0.12),_transparent_25%),linear-gradient(135deg,_#fff7ed_0%,_#fffaf5_100%)] text-slate-800">
      <Navbar
        cartCount={cartCount}
        cartItems={cart}
        showCart={showCart}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onToggleCart={() => setShowCart((prev) => !prev)}
      />
      <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Hero onOrderNow={scrollToMenu} onViewMenu={scrollToMenu} />
        <HeadlineCards />
        <Category
          onSelectCategory={(category) => {
            setActiveType(category)
            scrollToMenu()
          }}
        />
        <Foods
          activeType={activeType}
          setActiveType={setActiveType}
          activePrice={activePrice}
          setActivePrice={setActivePrice}
          searchTerm={searchTerm}
          onAddToCart={addToCart}
        />
      </main>

      {showCart && (
        <div className="fixed right-4 top-24 z-40 w-[min(92vw,360px)] rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-2xl">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-lg font-black text-slate-900">Your cart</h3>
            <div className="flex items-center gap-2">
              {cart.length > 0 ? (
                <button
                  type="button"
                  onClick={() => setCart([])}
                  className="text-sm font-semibold text-slate-500 transition hover:text-orange-500"
                >
                  Clear
                </button>
              ) : null}
              <button type="button" onClick={() => setShowCart(false)} className="text-sm font-semibold text-orange-500">
                Close
              </button>
            </div>
          </div>
          {cart.length === 0 ? (
            <p className="text-sm text-slate-500">Your cart is empty. Add a favorite to get started.</p>
          ) : (
            <div className="space-y-3">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-500">x{item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-orange-600">{item.price}</p>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="rounded-full border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-500 transition hover:border-orange-200 hover:text-orange-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              <div className="rounded-xl border border-orange-100 bg-orange-50 p-3">
                <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
                  <span>Subtotal</span>
                  <span>${cartSubtotal}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <footer className="border-t border-slate-200/80 bg-slate-950/90 py-6 text-center text-sm text-slate-300">
        <p>Fresh flavors, fast delivery, and unforgettable comfort food.</p>
      </footer>
    </div>
  )
}

export default App

