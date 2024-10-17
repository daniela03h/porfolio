import React from "react";

export interface ITextArea {
  label: string;
  id: string;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  maxlength?: number;
  className?: string;
}

const TextArea: React.FC<ITextArea> = ({
  label,
  id,
  required,
  value,
  onChange,
  name,
  maxlength,
  className,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label} </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        name={name}
        maxLength={maxlength}
        className={className}
        {...(required && { required })}
      />
    </div>
  );
};

export default TextArea;
