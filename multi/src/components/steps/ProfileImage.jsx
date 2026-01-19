import { Header } from "../layer/Header";
// import { initialValues } from "@/constants/initial";
import { useState, useRef } from "react";

export const ProfileImage = ({ handleChange, formErrors }) => {
  const inputRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [imageURL, setImageURL] = useState("");
  // const [formValues, setFormValues] = useState(initialValues);

  const handleBrowseClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleUploadImage = (file) => {
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImageURL(imageUrl);
    handleChange({
      target: {
        name: "profileImage",
        value: file,
      },
    });
  };

  const clearImage = () => {
    inputRef.current.value = "";
    setImageURL("");
    handleChange({
      target: {
        name: "profileImage",
        value: "",
      },
    });
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const uploadedImage = event.dataTransfer.files[0];
    handleUploadImage(uploadedImage);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };
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
            onClick={handleBrowseClick}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
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
              border: isDragging ? "3px dashed green" : "2px solid transparent",
            }}
          >
            {imageURL ? (
              <img
                src={imageURL}
                alt="image/*"
                className="flex w-50 h-50 z-10 object-cover rounded-[10px]"
              />
            ) : (
              "Browse or Drag and Drop"
            )}
            <input
              ref={inputRef}
              type="file"
              hidden
              onChange={(e) => handleUploadImage(e.target.files[0])}
            />
          </div>
          <button onClick={clearImage}>X</button>
          <p className="err">{formErrors.profileImage}</p>
        </div>
      </div>
    </div>
  );
};
