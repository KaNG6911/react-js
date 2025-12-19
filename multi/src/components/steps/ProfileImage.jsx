import { Header } from "../layer/Header";
import { useState, useRef } from "react";

export const ProfileImage = ({ handleChange, formErrors }) => {
  const inputRef = useRef();
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="flex flex-col w-150 h-200 bg-white rounded-2xl items-center">
      <Header />
      <div className="flex flex-col gap-5 ">
        <div className="flex flex-col">
          Birthday *
          <input
            type="date"
            name="birthday"
            onChange={handleChange}
            className="w-40 h-10 rounded-[7px] border-gray-400 border-b pl-3"
          />
          <p className="err">{formErrors.birthday}</p>
        </div>
        <div className="flex flex-col">
          Profile Image *
          <div
            style={{
              display: "flex",
              height: 200,
              width: 480,
              backgroundColor: "rgb(181, 180, 180)",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 8,
              borderRadius: 10,
              color: "white",
              border: isDragging ? "2px dashed green" : "2px solid transparent",
            }}
          >
            Drag and Drop
            <input
              type="file"
              hidden
              name="profileImage"
              onChange={handleChange}
              ref={inputRef}
            />
          </div>
          <p className="err z-1">{formErrors.ProfileImage}</p>
        </div>
      </div>
    </div>
  );
};
