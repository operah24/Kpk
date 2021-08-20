import React from 'react';

const Input = ({type, label, name, placeholder, className, handleChange, value, required}) => {
    return (
      
    <div>
          <label>{label}</label>
            <input type={type} name={name} placeholder={placeholder} className={className} value={value} onChange={handleChange} required={ required}/>
    </div>
  );
}

export default Input;
