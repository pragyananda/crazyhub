
import { useState } from "react";
import styles from "../style";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-cyan-300 border-b-2 border-cyan-400' : 'text-white';
  }
  return (
    <>
      <div className="absolute top-0 m bg-transparent w-full ">
        <div className={`${styles.paddingX}${styles.flexCenter} `}>
          <div className={``}>
            <nav className="w-full flex py-6 justify-between items-center navbar ">
              <NavLink to="/" className="logo text-white ml-10 text-[1.4rem]">Crazyhub</NavLink>
              {/* <img src={react_svg} alt="crazyhub logo" className="w-[124px] h-[32px] " /> */}
              <ul className="list-none sm:flex hidden justify-end items-center">
                <li className={`font-poppins font-normal text-[16px] text-white mr-10 ${isActive("/")}`}>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className={`font-poppins font-normal text-[16px] text-white mr-10 ${isActive("/services")}`}>
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li className={`font-poppins font-normal text-[16px] text-white mr-10 ${isActive("/portfolio")}`}>
                  <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
                <li className={`font-poppins font-normal text-[16px] text-white mr-10 ${isActive("/career")}`}>
                  <NavLink to="/career">Career</NavLink>
                </li>
              </ul>
              <span className="list-none sm:flex hidden justify-end items-center bg-black rounded-3xl text-white px-4 py-1 black-button box-shadow"><NavLink to="/contact">Contact</NavLink></span>
              <div className="sm:hidden flex flex-1 justify-end items-center mr-10">
                {toggle ? (
                  <AiOutlineClose onClick={() => setToggle((prev) => (!prev))} className="text-2xl cursor-pointer object-contain text-white" />
                ) : (
                  <AiOutlineMenu onClick={() => setToggle((prev) => (!prev))} className="text-2xl cursor-pointer object-contain text-white" />
                )}
                <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`} style={{ position: "absolute" }}>
                  <ul className="list-none flex justify-end items-start flex-1 flex-col">
                    <li className={`font-poppins font-normal text-[16px] text-white mb-4 ${isActive("/")}`}>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li className={`font-poppins font-normal text-[16px] text-white mb-4 ${isActive("/services")}`}>
                      <NavLink to="/services">Services</NavLink>
                    </li>
                    <li className={`font-poppins font-normal text-[16px] text-white mb-4 ${isActive("/portfolio")}`}>
                      <NavLink to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li className={`font-poppins font-normal text-[16px] text-white mb-4 ${isActive("/career")}`}>
                      <NavLink to="/career">Career</NavLink>
                    </li>
                    <span className=" bg-black rounded-3xl text-white px-4 py-1 black-button"><NavLink to="/contact">Contact</NavLink></span>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

    </>
  )
}
