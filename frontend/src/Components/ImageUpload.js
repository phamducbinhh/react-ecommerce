import React from "react";

const ImageUpload = ({ name, className = "", image = "", ...props }) => {
  return (
    <label
      className={`cursor-pointer flex items-center justify-center bg-gray-100 border border-dashed w-full h-[50px] rounded-lg ${className} relative overflow-hidden group`}
    >
      <input
        type="file"
        name={name}
        className="hidden-input"
        onChange={() => {}}
        {...props}
      />
    </label>
  );
};

export default ImageUpload;
