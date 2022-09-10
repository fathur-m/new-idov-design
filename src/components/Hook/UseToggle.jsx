import { useState } from "react";

export const UseToggle = () => {
  const [status, setStatus] = useState(false);
  const toggleStatus = () => setStatus((prev) => !prev);

  return { status, toggleStatus };
};
