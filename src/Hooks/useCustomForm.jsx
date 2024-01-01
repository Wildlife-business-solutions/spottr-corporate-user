// import { useUserProfileContext } from "context/webApp/userProfile/userProfileContext";
import { useState, useEffect, useRef } from "react";
// import { Log } from "utility/helpers";



const useCustomForm = ({ initialValues, onSubmit }) => {
  // const {userProfileData, setUserProfileData} = useUserProfileContext()
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  
  // const [onSubmitting, setOnSubmitting] = useState(false);
  // const [onBlur, setOnBlur] = useState(false);

  const formRendered = useRef(true);
  useEffect(() => {
    if (formRendered.current) {
      setValues(initialValues);
      setErrors({});
      setTouched({});
      // setOnSubmitting(false);
      // setOnBlur(false);
    }
    formRendered.current = false;
  }, [initialValues]);

  const handleChange = (event) => {
    // console.log(event.target.value);
    // Log(values)
    const { target } = event;
    const { name, value } = target;
    event.persist();
    setValues({ ...values, [name]: value });
  };

  const handleBlur = (event) => {
    const { target } = event;
    const { name } = target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors({ ...errors });
    onSubmit({ values, errors });
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export default useCustomForm;
