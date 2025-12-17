import { Header } from '../layer/Header'

export const Private = ({ handleChange }) => {
  return (
    <div className="flex flex-col w-150 h-200 bg-white rounded-2xl items-center">
      <Header />
      <div className="flex flex-col gap-5 ">
        <div className="flex flex-col">
          Email *
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="w-120 h-10 rounded-[7px] border-b border-gray-400 pl-3"
          />
        </div>
        <div className="flex flex-col">
          Phone Number *
          <input
            type="text"
            name="phoneNumber"
            onChange={handleChange}
            className="w-120 h-10 rounded-[7px] border-b border-gray-400 pl-3"
          />
        </div>
        <div className="flex flex-col">
          Password *
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="w-120 h-10 rounded-[7px] border-b border-gray-400 pl-3"
          />
        </div>
        <div className="flex flex-col">
          Confirm Password *
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            className="w-120 h-10 rounded-[7px] border-b border-gray-400 pl-3"
          />
        </div>
      </div>
    </div>
  )
}
