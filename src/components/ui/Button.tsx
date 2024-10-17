"use client"

interface IButton {
  onClick?: () => void;
  children: React.ReactNode;
  type?: string;
  className?: string
}

const Button: React.FC<IButton> = ({children, onClick, className }) => {
  return (
    <button onClick={() => onClick?.()} className={className}>{children}</button>
  )
}

export default Button