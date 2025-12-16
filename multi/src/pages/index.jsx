import { useState } from "react";
import { Contact, Private, ProfileImage, Success } from "@/components/steps";

const Home = () => {
  const [step, setStep] = useState(0);

  const handleClick = () => {
    setStep(step + 1);
  };
  const handlePrev = () => {
    setStep(step - 1);
  };
  const Container = [Contact, Private, ProfileImage, Success][step];
  return (
    <div>
      <Container />
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleClick}>Continue</button>
    </div>
  );
};
export default Home;
