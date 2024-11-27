// Create a custom hook to openForm ContactForm Component
import { useState } from "react";
const useContactForm = () => {
  const [openForm, setOpenForm] = useState(false);
  const handleOpenForm = (e) => {
    e.preventDefault();
    setOpenForm(true);
  };
  const handleCloseForm = () => {
    setOpenForm(false);
  };

  return { openForm, handleOpenForm, handleCloseForm };
};
export default useContactForm;
