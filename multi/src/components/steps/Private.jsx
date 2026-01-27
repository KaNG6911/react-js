import { Header } from "../layer/Header";

export const Private = ({ handleChange, formErrors, formValues }) => {
  return (
    <div className="flex flex-col w-150 h-200 bg-white rounded-2xl items-center">
      <Header />
      <div className="flex flex-col gap-3 w-120">
        <div className="flex flex-col">
          <span>
            Email<span className="text-red-500"> *</span>
          </span>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formValues.email || ""}
            className={
              (formErrors.email ? "border-red-500 " : "") +
              (formValues.email ? "bg-blue-200" : "") +
              " h-10 rounded-[7px] border-b border-gray-400 pl-3"
            }
          />
          <p className="err">{formErrors.email}</p>
        </div>
        <div className="flex flex-col">
          <span>
            Phone Number<span className="text-red-500"> *</span>
          </span>
          <input
            type="text"
            name="phoneNumber"
            onChange={handleChange}
            value={formValues.phoneNumber}
            className={
              (formErrors.phoneNumber ? "border-red-500 " : "") +
              (formValues.phoneNumber ? "bg-blue-200" : "") +
              " h-10 rounded-[7px] border-b border-gray-400 pl-3"
            }
          />
          <p className="err">{formErrors.phoneNumber}</p>
        </div>
        <div className="flex flex-col">
          <span>
            Password<span className="text-red-500"> *</span>
          </span>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formValues.password}
            className={
              (formErrors.password ? "border-red-500 " : "") +
              (formValues.password ? "bg-blue-200" : "") +
              " h-10 rounded-[7px] border-b border-gray-400 pl-3"
            }
          />
          <p className="err">{formErrors.password}</p>
        </div>
        <div className="flex flex-col">
          <span>
            Confirm Password<span className="text-red-500"> *</span>
          </span>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={formValues.confirmPassword}
            className={
              (formErrors.confirmPassword ? "border-red-500 " : "") +
              (formValues.confirmPassword ? "bg-blue-200" : "") +
              " h-10 w-120 rounded-[7px] border-b border-gray-400 pl-3"
            }
          />
          <p className="err">{formErrors.confirmPassword}</p>
        </div>
      </div>
    </div>
  );
};
