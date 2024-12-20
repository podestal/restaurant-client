import { Link } from "react-router-dom";
import ThemeSelector from "../components/ui/ThemeSelector";
import Button from "../components/ui/Button";
import Cart from "../components/cart/Cart";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../hooks/store/useAuthStore";
import Logout from "../components/auth/Logout";
import useGetUser from "../hooks/auth/useGetUser";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RiCloseCircleLine, RiMenu2Fill } from "@remixicon/react";
import { isTokenExpired } from "../utils/utilities";
import logo from '../assets/imgs/logo.png'

const Navigator = () => {
  const navigate = useNavigate();
  let access = useAuthStore((s) => s.access) || "";
  const isExpired = isTokenExpired(access)
  access = isExpired ? '' : access
  const { data: user, isLoading } = useGetUser({ access });
  const [show, setShow] = useState(false)

  if (isLoading) return <p>Loading...</p>;

  const renderLinks = () => {
    if (!user) {
      return (
        <>
          <NavLink to="about" label="About Us" />
          <NavLink to="careers" label="Careers" />
          <NavLink to="legal" label="Legal" />
        </>
      );
    }

    const groupLinks: Record<string, JSX.Element[]> = {
      waiter: [
        <NavLink key="menu" to="menu" label="Menu" />,
        <NavLink key="tables" to="tables" label="Tables" />,
      ],
      kitchen: [
        <NavLink key="kitchen" to="kitchen" label="Kitchen" />,
      ],
      podestal: [
        <NavLink to="menu" label="Menu" />,
        <NavLink key="dishes" to="dishes" label="Dishes" />,
        <NavLink key="kitchen" to="kitchen" label="Kitchen" />,
        <NavLink key="tables" to="tables" label="Tables" />,
        <NavLink key="sales" to="sales" label="Sales" />,
        <NavLink key="orders" to="orders" label="Orders" />,
      ],
    };

    return user.groups.flatMap((group) => groupLinks[group] || []);
  };

  return (
    <>
        <div className="w-full dark:bg-slate-950 bg-white fixed z-40 shadow-lg shadow-slate-400 dark:shadow-slate-700 max-lg:hidden">
          <div className="w-full flex justify-between items-center h-[100px] 2xl:max-w-[1280px] mx-auto">
            <Link to="/">
              <img src={logo} alt="LOGO" width={150} />
            </Link>

            <div className="flex justify-center items-center gap-24 font-montserrat">
              {renderLinks()}
            </div>

            <div className="flex justify-center items-center gap-12">
              <ThemeSelector />
              {access ? <Logout /> : <Button label="Login" onClick={() => navigate("/login")} />}
              {/* {(user?.groups.length === 0 || !user) && <Cart />} */}
              {access && <Cart />}
            </div>
          </div>
        </div>
        {/* <Icon onClick={() => setShow(true)} className="hover:text-blue-700 cursor-pointer fixed top-0 right-0 m-6 z-40" icon={RiMenu2Fill} color='blue'/> */}
        <div className="lg:hidden w-full">
          <RiMenu2Fill 
            onClick={() => setShow(true)}
            className="hover:text-blue-700 cursor-pointer fixed top-0 right-0 m-6 z-40"/>
          <AnimatePresence>
            {
              show && 
              <motion.div 
                initial={{opacity: 0, translateY: -200}}
                whileInView={{opacity: 1, translateY: 0}}
                exit={{opacity: 0, translateY: 200}}
                transition={{duration: 0.8}}
                className="text-xl fixed h-screen z-50 w-full flex flex-col justify-center items-center gap-12 bg-transparent backdrop-blur-xl overflow-scroll">
                  {/* <Icon onClick={() => setShow(false)}  className="cursor-pointer hover:text-red-700" icon={RiCloseCircleLine} size="xl" color='red'/> */}
                  <RiCloseCircleLine 
                    className="cursor-pointer hover:text-red-700"
                    onClick={() => setShow(false)}
                  />
                  {/* <Link onClick={() => setShow(false)} to='/'><p className="hover:text-slate-400">Home</p></Link> */}
                  <div className="flex flex-col justify-center gap-20 h-full" onClick={() => setShow(false)}>
                    {renderLinks()}
                  </div>
                  {/* <Logout setShow={setShow}/> */}
              </motion.div>
            }
          </AnimatePresence>
        </div>
    </>
  );
};

// A reusable component for navigation links
const NavLink = ({ to, label }: { to: string; label: string }) => (
  <Link className="hover:dark:text-slate-300 hover:text-slate-600 text-sm" to={to}>
    {label}
  </Link>
);

export default Navigator;
