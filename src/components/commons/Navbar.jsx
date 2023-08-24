import styles from "../../styles/tailwind";
import yawoo from "../../assets/images/yawoo.png";
import { Link, NavLink } from "react-router-dom";
import { navbarLinks } from "../../data/links";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full shadow bg-white">
      <nav
        className={`${styles.maxWidth} h-[80px] flex justify-between items-center`}
      >
        <div>
          <img src={yawoo} alt="logo" className="h-[65px]" />
        </div>
        <div className="flex gap-[40px]">
          {navbarLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={`hover:text-color-primary`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="flex gap-[24px]">
          <Link
            to="/login"
            className="h-[38px] w-[97px] flex justify-center items-center rounded-[8px] text-color-primary border border-color-primary hover:bg-color-secondary hover:text-white"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="h-[38px] w-[97px] flex justify-center items-center rounded-[8px] border-none bg-color-primary text-white hover:bg-color-secondary"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
