// import { saveFormValues } from "@/utils/LocalStorage";
import { Header } from "../layer/Header";

export const Contact = ({ handleChange, formErrors, formValues }) => {
  // console.log(formErrors);
  return (
    <div className="flex flex-col w-150 h-200 bg-white rounded-2xl items-center">
      <Header />
      <div className="flex flex-col gap-8 pt-10 w-120">
        <div className="flex flex-col">
          <span>
            First Name<span className="text-red-500"> *</span>
          </span>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={formValues.firstName}
            className={
              (formErrors.firstName ? "border-red-500 " : "") +
              (formValues.firstName ? "bg-blue-200" : "") +
              " h-10 rounded-[7px] border-b border-gray-400 pl-3"
            }
          />
          <p className="err">{formErrors.firstName}</p>
        </div>
        <div className="flex flex-col">
          <span>
            Last Name<span className="text-red-500"> *</span>
          </span>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={formValues.lastName}
            className={
              (formErrors.lastName ? "border-red-500 " : "") +
              (formValues.lastName ? "bg-blue-200" : "") +
              " h-10 rounded-[7px] border-b border-gray-400 pl-3"
            }
          />
          <p className="err">{formErrors.lastName}</p>
        </div>
        <div className="flex flex-col">
          <span>
            User Name<span className="text-red-500"> *</span>
          </span>
          <input
            type="text"
            name="userName"
            onChange={handleChange}
            value={formValues.userName}
            className={
              (formErrors.userName ? "border-red-500  " : "") +
              (formValues.userName ? "bg-blue-200" : "") +
              " h-10 rounded-[7px] border-b border-gray-400 pl-3"
            }
          />
          <p className="err">{formErrors.userName}</p>
        </div>
      </div>
      {/* <button onClick={handleSubmit}>submit</button> */}
    </div>
  );
};
