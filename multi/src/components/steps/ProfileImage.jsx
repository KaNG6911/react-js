import { Header } from "../layer/Header";
import { useState, useRef } from "react";

export const ProfileImage = ({ handleChange, formErrors, formValues }) => {
  const inputRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [imageURL, setImageURL] = useState("");

  const handleBrowseClick = () => {
    if (!formValues.profileImage) {
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
        type: "file",
        files: [file],
        value: imageURL,
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
    handleUploadImage(event.dataTransfer.files[0]);
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
      <div className="flex flex-col gap-5 w-120">
        <div className="flex flex-col">
          <span>
            Birthday<span className="text-red-500"> *</span>
          </span>
          <input
            type="date"
            name="birthday"
            onChange={handleChange}
            value={formValues.birthday}
            className={
              (formErrors.birthday ? "border-red-500 " : "") +
              (formValues.birthday ? "bg-blue-200" : "") +
              " h-10 rounded-[7px] border-b border-gray-400 pl-3 pr-3"
            }
          />
          <p className="err">{formErrors.birthday}</p>
        </div>
        <div className="flex flex-col">
          <span>
            Profile Image<span className="text-red-500"> *</span>
          </span>
          <div
            onClick={handleBrowseClick}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`flex h-50 w-120 mt-2 rounded-[10px] justify-center items-center relative text-white bg-gray-300 ${isDragging ? "border-[3px] border-dashed border-green-500" : "border-0"} `}
          >
            {imageURL ? (
              <img
                src={imageURL}
                value={formValues.profileImage && <img src={imageURL} />}
                className="flex w-full h-full object-cover rounded-[10px]"
              />
            ) : (
              <span className="flex flex-col items-center gap-1">
                <img src="Vector3.svg" className />
                <p>Browse or Drag and Drop</p>
              </span>
            )}
            {formValues.profileImage && imageURL && (
              <button
                onClick={clearImage}
                className="flex bg-black p-3 absolute top-2 right-2 rounded-2xl z-10"
              >
                <img src="Vector2.png" />
              </button>
            )}
            <input
              ref={inputRef}
              type="file"
              hidden
              onChange={(e) => handleUploadImage(e.target.files[0])}
            />
          </div>
          <p className="err">{formErrors.profileImage}</p>
        </div>
      </div>
    </div>
  );
};
