"use client"

interface IInput {
  label?: string;
  type: string;
  required?: boolean;
  id?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  className?: string;
}

const Input: React.FC<IInput> = ({ label, type, required, id, value, onChange, name, className }) => {
    return (
        <div >
            <label htmlFor={id}>{label}</label>
            <div>
                <input 
                    type={type} 
                    id={id} 
                    value={value} 
                    name = {name}                  
                    onChange={onChange} 
                    className={className}
                    {...(required && { required })}
                />
            </div>
        </div>
    );
}

export default Input;