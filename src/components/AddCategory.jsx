import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState("");

    const onChangeValue = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        const value = inputValue.trim()
        if (value.length < 1) return;
        event.preventDefault();
        onAddCategory(value);
        setInputValue("");
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gif..."
                value={inputValue}
                onChange={onChangeValue}
            />
        </form>
    );
};
