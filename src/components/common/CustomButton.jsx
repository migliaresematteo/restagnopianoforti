import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './CustomButton.css';

const CustomButton = ({ 
variant = 'primary', 
size = 'medium',
fullWidth = false,
icon,
onClick,
type = 'button',
disabled = false,
className = '',
link = '',
text = ''
}) => {
const buttonClasses = [
    'modern-button',
    `modern-button--${variant}`,
    `modern-button--${size}`,
    fullWidth ? 'modern-button--full-width' : '',
    className
].filter(Boolean).join(' ');

return (
    <motion.button
    type={type}
    className={buttonClasses}
    onClick={onClick}
    disabled={disabled}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.2 }}
    >
    {icon && <span className="modern-button__icon">{icon}</span>}
    <a href={link} className="modern-button__text text-decoration-none text-light">{text}</a>
    </motion.button>
);
};

CustomButton.propTypes = {
variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'text']),
size: PropTypes.oneOf(['small', 'medium', 'large']),
fullWidth: PropTypes.bool,
icon: PropTypes.node,
onClick: PropTypes.func,
type: PropTypes.oneOf(['button', 'submit', 'reset']),
disabled: PropTypes.bool,
className: PropTypes.string,
link: PropTypes.string,
text: PropTypes.string
};

export default CustomButton;
