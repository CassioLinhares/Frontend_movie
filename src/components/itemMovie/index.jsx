import { useState } from "react";
import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

export function ItemMovie({isNew, value, onChange, onClick, ...rest}) {
    const [inputValue, setInputValue] = useState(value);
    
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    return(
        <Container isNew={isNew}>
            <input 
                type="text"
                value={inputValue}
                readOnly={!isNew}
                onChange={handleChange} 
                {...rest}
            />
            <button 
                type="button"
                onClick={onClick}
            >
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    );
}