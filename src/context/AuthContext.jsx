import { createContext, useState, useEffect } from "react";

// ✅ Exportación nombrada (lo que está fallando ahora)
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const dummyUser = {
      email: "admin@galeria.com",
      password: "123456",
      name: "Rodrigo",
    };

    if (email === dummyUser.email && password === dummyUser.password) {
      setUser(dummyUser);
      localStorage.setItem("user", JSON.stringify(dummyUser));
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
