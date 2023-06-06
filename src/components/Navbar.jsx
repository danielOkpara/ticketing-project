import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiBell } from "react-icons/fi";
import { IoPersonCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (searchValue) => {
    setSearchInput(searchValue);
  };

  return (
    <nav className="bg-white px-20 py-8 flex justify-between items-center">
      <h3 className="text-2xl">LOGO</h3>
      <section className="flex items-center">
        <form className="relative">
          <input
            type="text"
            className="w-[218px] h-[58px] border border-inputFocusedBorderColor rounded-full pl-7"
            name="search"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => handleChange(e.target.value)}
          />
          <AiOutlineSearch
            className="absolute inset-y-[21px] right-6 opacity-[0.6]"
            size={23}
          />
        </form>
        <button>
          <FiBell size={30} className="opacity-[0.6] ml-5" />
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
