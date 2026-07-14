const Hero = ({ onOrderNow, onViewMenu }) => {
  return (
    <section className="mx-auto py-6 sm:py-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl shadow-slate-900/20">
        <img
          className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[620px]"
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg"
          alt="A plated gourmet meal"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/20" />
        <div className="absolute inset-0 flex items-center">
          <div className="grid w-full gap-8 px-6 py-8 text-white sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-14 lg:py-12">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur">
                Freshly packed • Hot on arrival
              </div>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                The <span className="text-orange-400">best</span> comfort food,
                <span className="block">delivered in minutes.</span>
              </h1>
              <p className="mt-4 max-w-xl text-sm text-slate-200 sm:text-base lg:text-lg">
                Discover crave-worthy burgers, pizza, salads, and daily specials made for every appetite.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onOrderNow}
                  className="rounded-full bg-orange-500 px-5 py-2.5 font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:-translate-y-0.5 hover:bg-orange-600"
                >
                  Order now
                </button>
                <button
                  type="button"
                  onClick={onViewMenu}
                  className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  View menu
                </button>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
                <span className="rounded-full bg-white/10 px-3 py-1">⭐ 4.9 average</span>
                <span className="rounded-full bg-white/10 px-3 py-1">⚡ 25 min delivery</span>
                <span className="rounded-full bg-white/10 px-3 py-1">🍴 100+ dishes</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero