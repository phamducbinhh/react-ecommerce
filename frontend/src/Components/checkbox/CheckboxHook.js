import React from "react";
import { useController } from "react-hook-form";

const CheckboxHook = ({ control, text, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: false,
  });
  return (
    <div className="styled-input-single">
      <input
        type="checkbox"
        value={props.value}
        id={props.name}
        checked={field.value}
        {...field}
      />
      <label htmlFor={props.name} className="text-sm cursor-pointer">
        {text}
      </label>
    </div>
  );
};

export default CheckboxHook;
