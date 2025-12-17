import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Contact, Private, ProfileImage, Success } from '@/components/steps'
import { initialValues } from '@/constants/initial'

const Home = (handleSubmit) => {
  const [step, setStep] = useState(0)
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState(initialValues)

  const Container = [Contact, Private, ProfileImage, Success][step]

  const handleClick = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }
  const handlePrev = () => {
    if (step > 0) setStep(step - 1)
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormErrors((previous) => ({
      ...previous,
      [name]: '',
    }))
    setFormValues((previous) => ({
      ...previous,
      [name]: value,
    }))

  }
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <Container handleChange={handleChange} formValues={formValues} formErrors={formErrors} setFormErrors={setFormErrors} handleClick={handleClick}/>
        <div className="buttonCon ">
          {step > 0 && step < 3 && (
            <button
              onClick={handlePrev}
              className="flex bg-gray-500 text-white pt-4 pb-4 pr-15 pl-15 rounded-[10px]"
            >
              Back
            </button>
          )}
          {step < 3 && (
            <button
              onClick={handleSubmit}
              className="flex bg-black text-white pt-4 pb-4 pr-33 pl-33 rounded-[10px]"
            >
              Continue {step}/3
            </button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
export default Home
