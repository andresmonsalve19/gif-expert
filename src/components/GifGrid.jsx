import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category, onDeleteCategory }) => {
    const { images, isLoading } = useFetchGifs(category);

    const onClikcDelete = () => onDeleteCategory(category)

    return (
        <>
            <div className="title-container">
                <h3>{category}</h3>
                <button className="delete-grid" onClick={onClikcDelete}>Eliminar</button>
            </div>
                {isLoading && <h2>Cargando...</h2>}
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem key={image.id} {...image} />
                    ))
                }
            </div>
        </>
    );
};
