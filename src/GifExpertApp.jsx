import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch"]);

    const onAddCategory = (input) => {
        const found = categories.find(
            (toFind) => toFind.toUpperCase() === input.toUpperCase()
        );
        found === undefined ? setCategories([input, ...categories]) : "";
    };

    const onDeleteCategory = (category) => {
        setCategories(categories.filter(cat => cat !== category))
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onAddCategory={onAddCategory} />

            {
                categories.map((category) => (
                    <GifGrid 
                        key={category} 
                        category={category} 
                        onDeleteCategory={onDeleteCategory}
                    />
                ))
            }
        </>
    );
};
