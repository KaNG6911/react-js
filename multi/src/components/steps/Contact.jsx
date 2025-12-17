import { Header } from '../layer/Header'
import { validateStepOne } from '@/utils/validators'


export const Contact = ({
  handleChange,
  formValues,
  formErrors,
  setFormErrors,
  handleClick,
}) => {
  const handleSubmit = () => {
    const { errors, isValid } = validateStepOne(formValues)
    setFormErrors(errors)
    if (isValid) {
      handleClick()
    }
  }

  console.log(formErrors)

  return (
    <div className="flex flex-col w-150 h-200 bg-white rounded-2xl items-center">
      <Header />
      <div className="flex flex-col gap-10 ">
        <div className="flex flex-col">
          First Name *
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            className="w-120 h-10 rounded-[7px] border-b border-gray-400 pl-3"
          />
          <p className='err'>{formErrors.firstName}</p>
        </div>
        <div className="flex flex-col">
          Last Name *
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            className="w-120 h-10 rounded-[7px] border-b border-gray-400 pl-3"
          />
          <p className='err'>{formErrors.lastName}</p>
        </div>
        <div className="flex flex-col">
          User Name *
          <input
            type="text"
            name="userName"
            onChange={handleChange}
            className="w-120 h-10 rounded-[7px] border-b border-gray-400 pl-3"
          />
          <p className='err'>{formErrors.userName}</p>
        </div>
      </div>
      {/* <button onClick={handleSubmit}>submit</button> */}
    </div>
  )
}
