import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navVariants = {
  open: { opacity: 1, top: "64px", transition: { duration: 0.3 } },
  close: {
    opacity: 0,
    top: "-200px",
    transition: { duration: 0.3 },
  },
};

const NavMobile = (props) => {
  const { nav } = props;
  return (
    <motion.ul
      animate={nav ? "open" : "close"}
      variants={navVariants}
      className="fixed z-[-1] top-[-200px] min-h-[200px] opacity-0 left-0 right-0 bg-ctm-blue text-center py-8 flex flex-col gap-8 backdrop-blur-lg"
    >
      <li>
        <NavLink to="/tv">Serial TV</NavLink>
      </li>
      <li>
        <NavLink to="/movie">Film</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
    </motion.ul>
  );
};

export default NavMobile;
