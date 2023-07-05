import { GifItem } from "./GifItem";
import {useFetchGifs} from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

    const { isLoading, images } = useFetchGifs(category);

    return (
        <div>
            <h2>{category}</h2>
                { 
                    isLoading && <h2> ...loading </h2>
                }
                <div className="card-grid">
                    {
                        images.map((img) => (
                                <GifItem 
                                    key = {img.id}
                                    {...img}
                                />
                        ))
                    }
                </div>
        </div>
    )
}
