import { createContext, useState } from "react";


export const AuthContext = createContext(null);

export const AppContext = ({ children }) => {
  const dumb_user = {
    first_name: "Juan",
    last_name: "Dela Cruz",
    phone: "09304123540",
    email: "",
  };
  const [customer, setCustomer] = useState(dumb_user);

  return <AuthContext.Provider value={{ customer }}>{children}</AuthContext.Provider>;
};
