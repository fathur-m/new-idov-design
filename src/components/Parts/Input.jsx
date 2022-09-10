import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { UseToggle } from "../Hook/UseToggle";

const Input = (props) => {
  const { className, typeInp, labelInp, getInputVal } = props;
  const { status: showPass, toggleStatus: setShowPass } = UseToggle();
  const [focusStatus, setFocusStatus] = useState(false);
  const [input, setInput] = useState("");

  const handleEmailPhone = (e) => {
    setInput(e.target.value);
    getInputVal(e.target.value);
  };

  if (typeInp === "password") {
    return (
      <div className={`relative rounded-lg bg-ctm-white ${className}`}>
        <label
          className={`absolute left-4 transition-all text-gray-400 ${
            focusStatus === null
              ? "hidden"
              : focusStatus
              ? "text-xs -translate-y-0 top-1.5"
              : "top-1/2 -translate-y-1/2"
          }`}
        >
          {labelInp}
        </label>
        <span
          onClick={setShowPass}
          className="absolute right-2 text-gray-400 top-1/2 -translate-y-1/2 text-2xl z-30 cursor-pointer"
        >
          {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
        </span>
        <input
          value={input}
          type={showPass ? "text" : "password"}
          className={`w-full bg-transparent h-[50px] px-4 relative z-10 text-ctm-black ${
            focusStatus && "pt-3"
          }`}
          onFocus={() => {
            setFocusStatus(true);
          }}
          onBlur={() => {
            if (input === "") {
              setFocusStatus(false);
            } else {
              setFocusStatus(null);
            }
          }}
          onChange={handleEmailPhone}
        />
      </div>
    );
  }
  return (
    <div className={`relative rounded-lg bg-ctm-white ${className}`}>
      <label
        className={`absolute left-4 transition-all text-gray-400 ${
          focusStatus === null
            ? "hidden"
            : focusStatus
            ? "text-xs -translate-y-0 top-1.5"
            : "top-1/2 -translate-y-1/2"
        }`}
      >
        {labelInp}
      </label>
      <input
        name="input"
        value={input}
        className={`w-full bg-transparent h-[50px] px-4 relative z-10 text-ctm-black ${
          focusStatus && "pt-3"
        }`}
        type={typeInp}
        onFocus={() => {
          setFocusStatus(true);
        }}
        onBlur={() => {
          if (input === "") {
            setFocusStatus(false);
          } else {
            setFocusStatus(null);
          }
        }}
        onChange={handleEmailPhone}
      />
    </div>
  );
};

export default Input;
