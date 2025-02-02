import React from 'react';



function InputField  ({type, id, name,value, onChange})  {

    return (
   <>
            <label htmlFor={id}>{name}:</label>
            <input
                type={type}
                id= {id}
                name={name}
                value={value}
                onChange={onChange}
            />
   </>
    )
}

export default InputField;