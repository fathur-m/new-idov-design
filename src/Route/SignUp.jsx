import { motion } from "framer-motion";
import pageVariants from "../components/pageVariants";
import backdrop from "../components/assets/backdrop1.jpg";
import LogoSvg from "../components/LogoSvg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../components/Parts/Input";

const SignUp = () => {
  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const navigate = useNavigate();

  const getEmailPhone = (val) => {
    setEmailPhone(val);
  };
  const getPassword = (val) => {
    setPassword(val);
  };
  const getRePass = (val) => {
    setRePassword(val);
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
          getInputVal={getEmailPhone}
        />
        <Input
          typeInp="password"
          labelInp="Kata sandi"
          getInputVal={getPassword}
        />
        <Input
          typeInp="password"
          labelInp="Masukan ulang kata sandi"
          getInputVal={getRePass}
        />
        <button
          onClick={() => navigate("/")}
          className="bg-ctm-green rounded-full h-[50px] my-8 text-base"
        >
          Daftar
        </button>
        <h1 className="text-xl">Sudah punya akun ?</h1>
        <button
          className="bg-ctm-blue rounded-lg h-[50px]"
          onClick={() => navigate("/")}
        >
          Masuk
        </button>
      </form>
    </motion.div>
  );
};

export default SignUp;
