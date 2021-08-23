const Button = ({text, onClick, className}) => (
    <span className={className} onClick={onClick}>{text}</span>
);

export default Button;