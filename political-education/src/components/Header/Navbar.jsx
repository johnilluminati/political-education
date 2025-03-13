import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = ({ headerLinks }) => {
  return (
    <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
      <Link to="/" className="block text-blue-500">
        <span className="sr-only">Home</span>
        <FaMagnifyingGlass className="text-2xl" />
      </Link>

      <div className="flex flex-1 items-center justify-end md:justify-between">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            {headerLinks.map((item, key) => {
              return (
                <li key={key}>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href={item.routerLink}> {item.text} </a>
                </li>
              )
            })}
          </ul>
        </nav>       

        <div className="flex items-center gap-4">
          <SearchBar />
          <DarkModeToggle />
        </div>
      </div>
    </div>
  )
}

export default Navbar;