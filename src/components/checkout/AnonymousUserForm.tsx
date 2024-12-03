import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Selector from "../ui/Selector";
import useCreateOrder from "../../hooks/api/order/useCreateOrder";
import { User } from "../../services/auth/signupService";
import CheckoutForm from "../ui/CheckoutForm";

interface Props {
  cartId: number;
  user?: User;
  totalAmount: number;
  subTotal: number;
}

const orderTypes = [
  { id: 1, name: "Take Out" },
  { id: 2, name: "Delivery" },
];

const AnonymousUserForm = ({ cartId, user, totalAmount, subTotal }: Props) => {
  const createOrder = useCreateOrder({ cart: cartId });
  const [showPayment, setShowPayment] = useState(false);

  const [name, setName] = useState(user ? `${user.first_name} ${user.last_name}` : "");
  const [phone, setPhone] = useState(user ? user.phone : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [orderType, setOrderType] = useState(1);
  const [address, setAddress] = useState("");

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [addressError, setAddressError] = useState("");

  const handleCreateOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) {
      setNameError("We need your name");
      return;
    }

    if (!phone) {
      setPhoneError("We need your phone number");
      return;
    }

    if (!email) {
      setEmail("We need your email");
      return;
    }

    if (orderType === 2 && !address) {
      setAddressError("We need your address");
      return;
    }

    setShowPayment(true);
  };

  return (
    <AnimatePresence mode="wait">
      {!showPayment ? (
        <motion.div
          key="form"
          className="w-full flex flex-col justify-center items-center col-span-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-poppins font-bold mb-6">Your details</h2>
          <form
            onSubmit={handleCreateOrder}
            className="w-[50%] flex flex-col justify-start items-center gap-6"
          >
            <Input
              placeholder="Your name ..."
              value={name}
              onChange={(e) => {
                name && setNameError("");
                setName(e.target.value);
              }}
              error={nameError}
            />
            <div className="w-full flex justify-center items-center gap-6">
              <Input
                placeholder="Your email ..."
                value={email}
                onChange={(e) => {
                  email && setEmailError("");
                  setEmail(e.target.value);
                }}
                error={emailError}
              />
              <Input
                placeholder="Your Phone ..."
                value={phone}
                onChange={(e) => {
                  phone && setPhoneError("");
                  setPhone(e.target.value);
                }}
                error={phoneError}
              />
            </div>
            <Selector
              defaultValue={orderType}
              values={orderTypes}
              setter={setOrderType}
              label="Order Type"
            />
            {orderType === 2 && (
              <Input
                placeholder="Address ..."
                value={address}
                onChange={(e) => {
                  address && setAddressError("");
                  setAddress(e.target.value);
                }}
                error={addressError}
              />
            )}
            <Button label="Next" />
          </form>
        </motion.div>
      ) : (
        <motion.div
          key="checkout"
          className="w-full col-span-2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <CheckoutForm
            amount={totalAmount}
            subTotal={subTotal}
            createOrder={createOrder}
            orderType={orderType}
            name={name}
            phone={phone}
            email={email}
            address={address}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnonymousUserForm;
