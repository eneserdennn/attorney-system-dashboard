import { createContext, useState } from "react";

const EditFormContext = createContext();

export const EditFormProvider = ({ children }) => {
  const [clientForm, setClientForm] = useState({});
  const values = { clientForm, setClientForm };
  return (
    <EditFormContext.Provider value={values}>
      {children}
    </EditFormContext.Provider>
  );
};

export default EditFormContext;
