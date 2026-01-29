import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Contact, Private, ProfileImage, Success } from "@/components/steps";
import { initialValues } from "@/constants/initial";
import {
  validateStep,
  validateStepThree,
  validateStepTwo,
} from "@/utils/validators";
import { saveFormValues } from "@/utils/localStorage";
import { retrieveFormValues } from "@/utils/localStorage";

const Home = () => {
  const [step, setStep] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);

  const Container = [Contact, Private, ProfileImage, Success][step];

  const handleClick = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleChange = (event) => {
    const { name, value, files, type } = event.target;
    const finalValue = type === "file" ? (files?.[0] ?? null) : value;
    setFormErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
    setFormValues((previous) => ({
      ...previous,
      [name]: finalValue,
    }));
  };

  const handleSubmit = () => {
    let result;

    if (step === 0) {
      result = validateStep(formValues);
    }
    if (step === 1) {
      result = validateStepTwo(formValues);
    }
    if (step === 2) {
      result = validateStepThree(formValues);
    }
    const { errors, isValid } = result;

    setFormErrors(errors);
    if (isValid) {
      saveFormValues(formValues, step);
      handleClick();
    }
  };

  useEffect(() => {
    const saved = retrieveFormValues();
    if (!saved) return;

    if (saved.step === 3) {
      localStorage.removeItem("formValue");
      setStep(0);
      setFormValues(initialValues);
      return;
    }

    let validStep = 0;

    if (validateStep(saved).isValid) validStep = 1;
    if (validateStepTwo(saved).isValid) validStep = 2;
    if (validateStepThree(saved).isValid) validStep = 3;

    setFormValues(saved);
    setStep(validStep);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <Container
          handleChange={handleChange}
          formErrors={formErrors}
          formValues={formValues}
        />
        <div className="buttonCon ">
          {step > 0 && step < 3 && (
            <button
              onClick={handlePrev}
              className="flex border-gray-400 border-2 font-medium text-black pt-3 pb-3 pr-9 pl-9 rounded-[10px]"
            >
              {"< Back"}
            </button>
          )}
          {step < 3 && (
            <button
              onClick={handleSubmit}
              className="flex bg-black font-medium text-white pt-3 pb-3 pr-29 pl-29 rounded-[10px]"
            >
              Continue {step + 1}/3 {" >"}
            </button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default Home;
