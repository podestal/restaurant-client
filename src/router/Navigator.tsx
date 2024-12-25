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
import LanguageSelector from "../components/ui/LanguageSelector";
import useLanguageStore from "../hooks/store/useLanguageStore";

const Navigator = () => {
  const navigate = useNavigate();
  let access = useAuthStore((s) => s.access) || "";
  const isExpired = isTokenExpired(access)
  access = isExpired ? '' : access
  const { data: user, isLoading } = useGetUser({ access });
  const [show, setShow] = useState(false)

  const lan = useLanguageStore(s => s.lan)

  if (isLoading) return <p>Loading...</p>;

  const renderLinks = () => {
    if (!user) {
      return (
        <>
          <NavLink to="about" label={lan === 'EN' ? "About Us" : "Nosotros" }/>
          <NavLink to="careers" label={lan === 'EN' ? "Careers" : "Carreras"} />
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
        <NavLink to="menu" label={lan === 'EN' ? "Menu" : 'Carta'}/>,
        <NavLink key="dishes" to="dishes" label={lan === 'EN' ? "Dishes" : 'Platos'} />,
        <NavLink key="kitchen" to="kitchen" label={lan === 'EN' ? "Kitchen" : 'Cocina'} />,
        <NavLink key="tables" to="tables" label={lan === 'EN' ? "Tables" : 'Mesas'} />,
        <NavLink key="sales" to="sales" label={lan === 'EN' ? "Sales" : 'Ventas'} />,
        <NavLink key="orders" to="orders" label={lan === 'EN' ? "Orders" : 'Ordenes'} />,
      ],
    };

    return user.groups.flatMap((group) => groupLinks[group] || []);
  };

  return (
    <>
        <div className="w-full dark:bg-slate-950 bg-white fixed z-40 shadow-lg shadow-slate-400 dark:shadow-slate-700 max-lg:hidden">
          <div className="w-full flex justify-between items-center h-[100px] 2xl:max-w-[1280px] mx-auto">
            {!access && <Link to='/'>
              <img src={logo} alt="LOGO" width={150} className="hover:opacity-80" />
            </Link>}

            <div className="flex justify-center items-center gap-24 font-montserrat">
              {renderLinks()}
            </div>

            <div className="flex justify-center items-center gap-12">
              <LanguageSelector />
              <ThemeSelector />
              {access ? <Logout /> : <Button label={lan === 'EN' ? 'Login' : 'Accede'} onClick={() => navigate("/login")} />}
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
                className="text-xl fixed h-screen z-50 w-full flex flex-col justify-center items-center gap-20 bg-transparent backdrop-blur-xl overflow-scroll">
                  {/* <Icon onClick={() => setShow(false)}  className="cursor-pointer hover:text-red-700" icon={RiCloseCircleLine} size="xl" color='red'/> */}
                  <RiCloseCircleLine 
                    className="cursor-pointer text-red-700"
                    size={40}
                    onClick={() => setShow(false)}
                  />
                  <ThemeSelector />
                  <div className="flex flex-col justify-center gap-20" onClick={() => setShow(false)}>
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
