import { Header } from '../layer/Header'

export const ProfileImage = ({ handleChange }) => {
  return (
    <div className="flex flex-col w-150 h-200 bg-white rounded-2xl items-center">
      <Header />
      <div className="flex flex-col gap-10 ">
        <div className="flex flex-col">
          Birthday *
          <input
            type="date"
            name="birthday"
            onChange={handleChange}
            className="w-40 h-10 rounded-[7px] border-gray-400 border-b pl-3"
          />
        </div>
        <div className="flex flex-col">
          Profile Image *
          <input
            type="file"
            name="profileImage"
            onChange={handleChange}
            className="w-120 h-50 rounded-[7px] border-gray-400 border pl-3"
          />
        </div>
      </div>
    </div>
  )
}
