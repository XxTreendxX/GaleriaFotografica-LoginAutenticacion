import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // debe coincidir exactamente

export const useAuth = () => {
  return useContext(AuthContext);
};

