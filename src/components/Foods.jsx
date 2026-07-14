import { data } from '../data/data'

const Foods = ({ activeType, setActiveType, activePrice, setActivePrice, searchTerm, onAddToCart }) => {
  const normalizedSearch = searchTerm.trim().toLowerCase()

  const filteredFoods = data.filter((item) => {
    const matchesType = activeType === 'all' || item.category === activeType
    const matchesPrice = activePrice === 'all' || item.price === activePrice
    const matchesSearch = normalizedSearch === '' || item.name.toLowerCase().includes(normalizedSearch) || item.category.toLowerCase().includes(normalizedSearch)
    return matchesType && matchesPrice && matchesSearch
  })

  return (
    <section id="foods-section" className="py-10 sm:py-12">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">Top rated</p>
        <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
          Discover your next favorite bite
        </h2>
      </div>

      <div className="flex flex-col gap-6 rounded-[1.5rem] border border-slate-200 bg-white/80 p-4 shadow-sm lg:flex-row lg:items-end lg:justify-between lg:p-6">
        <div>
          <p className="mb-3 font-bold text-slate-700">Filter by type</p>
          <div className="flex flex-wrap gap-2">
            {['all', 'burger', 'pizza', 'salad', 'chicken'].map((type) => {
              const label = type === 'all' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setActiveType(type)}
                  className={`rounded-full border px-3 py-1.5 text-sm font-semibold transition ${activeType === type ? 'bg-orange-500 text-white' : 'border-orange-200 text-orange-600 hover:bg-orange-50'}`}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>

        <div>
          <p className="mb-3 font-bold text-slate-700">Filter by price</p>
          <div className="flex flex-wrap gap-2">
            {['all', '$', '$$', '$$$', '$$$$'].map((price) => (
              <button
                key={price}
                type="button"
                onClick={() => setActivePrice(price)}
                className={`rounded-full border px-3 py-1.5 text-sm font-semibold transition ${activePrice === price ? 'bg-slate-900 text-white' : 'border-slate-200 text-slate-700 hover:bg-slate-50'}`}
              >
                {price === 'all' ? 'Any' : price}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredFoods.length === 0 ? (
        <div className="mt-8 rounded-[1.25rem] border border-dashed border-slate-300 bg-white/80 p-8 text-center text-slate-600 shadow-sm">
          <p className="text-lg font-semibold text-slate-900">No dishes match your search yet.</p>
          <p className="mt-2 text-sm">Try another keyword or clear the filters to see more options.</p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {filteredFoods.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <img src={item.image} alt={item.name} className="h-[200px] w-full object-cover" />
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-bold text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.category}</p>
                  </div>
                  <span className="rounded-full bg-orange-100 px-2.5 py-1 text-sm font-semibold text-orange-600">
                    {item.price}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onAddToCart(item)}
                  className="mt-4 w-full rounded-full bg-slate-900 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-500"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Foods