import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { paths } from "../../utilities/constants";

const Footer = (): JSX.Element => {
    const { selectedPage } = useContext(GlobalContext)
    return (
        <div className='footer mt-auto'>
            <p className='center'>
                {paths[selectedPage].footer}
            </p>
        </div>
    )
}

export default Footer;