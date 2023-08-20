import Container from "../Container";
import Logo from "./Logo";
import MenuDropDown from "./MenuDropDown";
import Search from "./Search";


const Navbar = () => {
    return (
        <div className="fixed py-4 w-full bg-white z-10 shadow-sm border-b-[1px]">
            <Container>
                <div className="flex justify-between items-center">
                    <Logo />
                    <Search />
                    <MenuDropDown />
                </div>
            </Container>
        </div>
    );
};

export default Navbar;

