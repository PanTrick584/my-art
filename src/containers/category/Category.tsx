import './styles/category.scss';
import { ArtworksType } from "../../types/types";
import Artwork from "../artwork/Artwork";

type CategoryData = {
    data: ArtworksType
}

const Category = ({data}: CategoryData) => {
    console.log(data);
    
    return (
        <div className="category">
            {data.map( item => {
                return (
                    <Artwork itemData={item}/>
                )
            })}
        </div>
    )
}

export default Category;