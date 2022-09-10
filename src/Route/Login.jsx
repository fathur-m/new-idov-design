import LogoSvg from "../components/LogoSvg";
import backdrop from "../components/assets/backdrop1.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import pageVariants from "../components/pageVariants";
import Input from "../components/Parts/Input";
import { useState } from "react";

const Login = () => {
  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleInp = (value) => {
    setEmailPhone(value);
    setPassword(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      style={{
        backgroundImage: `url(${backdrop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen relative"
    >
      <div className="overlay overlay-detail"></div>
      <div className="flex justify-center py-8 relative z-10">
        <LogoSvg />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[400px] mx-auto mt-8 flex flex-col gap-4 relative z-10"
      >
        <h1 className="text-3xl font-bold py-2">Masuk</h1>
        <Input
          typeInp="text"
          labelInp="Email atau nomor telpon"
          getInputVal={handleInp}
        />
        <Input
          typeInp="password"
          labelInp="Kata sandi"
          getInputVal={handleInp}
        />
        <button
          onClick={() => navigate("/")}
          className="bg-ctm-blue rounded-full h-[50px] my-8 text-base"
        >
          Masuk
        </button>
        <h1 className="text-xl">Belum punya akun?</h1>
        <button
          className="bg-ctm-green rounded-lg h-[50px]"
          onClick={() => navigate("/")}
        >
          Daftar
        </button>
      </form>
    </motion.div>
  );
};

export default Login;
