import { categories } from '../data/data'

const Category = ({ onSelectCategory }) => {
  const targets = {
    'Fast Food': 'burger',
    Pizza: 'pizza',
    Wings: 'chicken',
    Indian: 'all',
    'Latest Deals': 'all',
    'Restaurant Rewards': 'all',
    'Best Overall': 'all',
    'Shipped Free': 'all',
  }

  return (
    <section className="py-6 sm:py-8">
      <div className="mb-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">Browse</p>
        <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">Popular categories</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelectCategory(targets[item.name] ?? 'all')}
            className="flex items-center justify-between rounded-[1.25rem] border border-slate-200 bg-white/80 p-4 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div>
              <h3 className="font-bold text-slate-900">{item.name}</h3>
              <p className="mt-1 text-sm text-slate-500">Trending now</p>
            </div>
            <img src={item.image} alt={item.name} className="h-14 w-14 rounded-full object-cover" />
          </button>
        ))}
      </div>
    </section>
  )
}

export default Category