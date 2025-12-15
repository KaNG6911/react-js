import { useState } from "react";
import { ContactInfo, PrivateInfo, ProfileImage, Success } from "@/components";

const Home = () => {
  const [step, setStep] = useState(1);

  const handleClick = () => {
    setStep(step + 1);
  };
  const handlePrev = () => {
    setStep(step - 1);
  };
  return (
    <div>
      {step === 1 && <ContactInfo />}
      {step === 2 && <PrivateInfo />}
      {step === 3 && <ProfileImage />}
      {step === 4 && <Success />}

      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleClick}>Continue</button>
    </div>
  );
};
export default Home;
