import { useState } from 'react';
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';

const Navbar = ({ cartCount, onToggleCart, searchTerm, onSearchChange }) => {
  const [nav, setNav] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => setNav(!nav)} className="rounded-full border border-slate-200 bg-white p-2.5 shadow-sm hover:bg-slate-50">
            <AiOutlineMenu size={20} />
          </button>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-orange-500">Crave</p>
            <h1 className="text-xl font-black sm:text-2xl">
              Best <span className="text-orange-500">Eats</span>
            </h1>
          </div>
          <div className="hidden items-center rounded-full bg-slate-100 p-1 text-sm font-medium lg:flex">
            <p className="rounded-full bg-slate-900 px-3 py-1.5 text-white">Delivery</p>
            <p className="px-3 py-1.5 text-slate-600">Pickup</p>
          </div>
        </div>

        <div className="hidden flex-1 items-center justify-end gap-3 md:flex">
          <label className="flex w-full max-w-xl items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-2 shadow-sm">
            <AiOutlineSearch size={18} className="text-slate-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search foods"
              aria-label="Search foods"
              className="ml-2 w-full bg-transparent text-sm outline-none"
            />
          </label>
          <button type="button" onClick={onToggleCart} className="flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-white shadow-lg shadow-slate-900/10">
            <BsFillCartFill size={16} />
            Cart
            {cartCount > 0 ? <span className="rounded-full bg-orange-500 px-2 py-0.5 text-xs">{cartCount}</span> : null}
          </button>
        </div>

        <button type="button" onClick={onToggleCart} className="rounded-full bg-slate-900 p-2.5 text-white shadow-lg shadow-slate-900/10 md:hidden">
          <BsFillCartFill size={16} />
        </button>
      </div>

      {nav ? <div className="fixed inset-0 z-10 bg-black/60" onClick={() => setNav(false)}></div> : null}
      <div className={nav ? 'fixed left-0 top-0 z-20 h-screen w-[290px] bg-white shadow-2xl duration-300' : 'fixed left-[-100%] top-0 z-20 h-screen w-[290px] bg-white shadow-2xl duration-300'}>
        <button type="button" className="absolute right-4 top-6 rounded-full border border-slate-200 bg-white p-2" onClick={() => setNav(false)}>
          <AiOutlineClose size={20} />
        </button>
        <h2 className="p-6 text-2xl font-bold">
          Best <span className="text-orange-500">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-slate-700">
            <li className="flex items-center rounded-xl px-3 py-3 text-lg hover:bg-orange-50"><TbTruckDelivery className="mr-4 text-orange-500" /> Orders</li>
            <li className="flex items-center rounded-xl px-3 py-3 text-lg hover:bg-orange-50"><MdFavorite size={22} className="mr-4 text-orange-500" /> Favourites</li>
            <li className="flex items-center rounded-xl px-3 py-3 text-lg hover:bg-orange-50"><FaWallet size={20} className="mr-4 text-orange-500" /> Wallet</li>
            <li className="flex items-center rounded-xl px-3 py-3 text-lg hover:bg-orange-50"><MdHelp size={22} className="mr-4 text-orange-500" /> Help</li>
            <li className="flex items-center rounded-xl px-3 py-3 text-lg hover:bg-orange-50"><AiFillTag size={20} className="mr-4 text-orange-500" /> Promotions</li>
            <li className="flex items-center rounded-xl px-3 py-3 text-lg hover:bg-orange-50"><BsFillSaveFill size={18} className="mr-4 text-orange-500" /> Best One</li>
            <li className="flex items-center rounded-xl px-3 py-3 text-lg hover:bg-orange-50"><FaUserFriends size={20} className="mr-4 text-orange-500" /> Invite Friends</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
