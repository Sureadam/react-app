const HeadlineCards = () => {
  const cards = [
    {
      title: 'Summer deals',
      subtitle: 'Buy one, get one free through 9/28',
      image:
        'https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'New restaurant picks',
      subtitle: 'Fresh arrivals added daily',
      image:
        'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Dessert drop',
      subtitle: 'Sweet treats to finish strong',
      image:
        'https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
  ];

  return (
    <div className="grid gap-6 py-8 md:grid-cols-3">
      {cards.map((card, index) => (
        <div key={index} className="group relative overflow-hidden rounded-[1.5rem] shadow-lg">
          <img className="h-[190px] w-full object-cover transition duration-300 group-hover:scale-105 md:h-[220px]" src={card.image} alt={card.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
            <p className="text-2xl font-bold">{card.title}</p>
            <p className="mt-1 text-sm text-slate-200">{card.subtitle}</p>
            <button className="mt-4 rounded-full border-white bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-orange-500 hover:text-white">
              Order now
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HeadlineCards