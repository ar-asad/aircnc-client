// import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import { categories } from "./categoriesData";
import CategoryBox from "./categoryBox";



const Categories = () => {
    // const [params, setParams] = useSearchParams();
    // console.log(params);

    return (
        <Container>
            <div className="pt-28 flex flex-row items-center justify-between overflow-x-auto">
                {
                    categories.map(item => (
                        <CategoryBox
                            label={item.label}
                            icon={item.icon}
                            key={item.label}
                        />
                    ))
                }
            </div>
        </Container>
    );
};

export default Categories;