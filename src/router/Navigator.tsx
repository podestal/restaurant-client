import { Link } from "react-router-dom";
import ThemeSelector from "../components/ui/ThemeSelector";
import Button from "../components/ui/Button";
import Cart from "../components/cart/Cart";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../hooks/store/useAuthStore";
import Logout from "../components/auth/Logout";
import useGetUser from "../hooks/auth/useGetUser";

const Navigator = () => {
  const navigate = useNavigate();
  const access = useAuthStore((s) => s.access) || "";
  const { data: user, isLoading } = useGetUser({ access });

  if (isLoading) return <p>Loading...</p>;

  const renderLinks = () => {
    if (!user) {
      return (
        <>
          <NavLink to="menu" label="Menu" />
          <NavLink to="about" label="About Us" />
          <NavLink to="catering" label="Catering" />
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
    <div className="w-full dark:bg-slate-950 bg-white fixed z-40 shadow-lg shadow-slate-400 dark:shadow-slate-700 max-lg:hidden">
      <div className="w-full flex justify-between items-center h-[100px] 2xl:max-w-[1280px] mx-auto">
        <Link to="/">
          <h2 className="text-5xl font-bold">loGO</h2>
        </Link>

        <div className="flex justify-center items-center gap-24 font-montserrat">
          {renderLinks()}
        </div>

        <div className="flex justify-center items-center gap-12">
          <ThemeSelector />
          {access ? <Logout /> : <Button label="Login" onClick={() => navigate("/login")} />}
          {(user?.groups.length === 0 || !user) && <Cart />}
        </div>
      </div>
    </div>
  );
};

// A reusable component for navigation links
const NavLink = ({ to, label }: { to: string; label: string }) => (
  <Link className="hover:dark:text-slate-300 hover:text-slate-600 text-sm" to={to}>
    {label}
  </Link>
);

export default Navigator;
