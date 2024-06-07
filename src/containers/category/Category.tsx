import './styles/category.scss';
import { ArtworksType } from "../../types/types";
import Artwork from "../artwork/Artwork";

type CategoryData = {
    data: ArtworksType
}

const Category = ({data}: CategoryData) => {
    return (
        <div className="category">
            {data.map( (item, id) => {
                return (
                    <Artwork key={id} itemData={item}/>
                )
            })}
        </div>
    )
}

export default Category;