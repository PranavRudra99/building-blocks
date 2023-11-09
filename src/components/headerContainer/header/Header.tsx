import { useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { paths } from "../../../utilities/constants";

const Header = (): JSX.Element => {
    const {selectedPage} = useContext(GlobalContext)
    return (<div className='center'>
        <h1 className='mt-0 mb-0 primary-header'>{paths[selectedPage].header}</h1>
    </div>)
}

export default Header;