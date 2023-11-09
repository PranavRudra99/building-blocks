import Navigation from "../navigation";
import Header from "./header";

const HeaderContainer = (): JSX.Element => {
    return (
        <div>
            <div className='p-abs'>
                <Navigation />
            </div>
            <div>
                <Header />
            </div>
        </div>
    )
}

export default HeaderContainer;