import AppNav from "./AppNav";
import AuthNav from "./AuthNav";

const NavBar = () => {
    return (
        // <div className="nav-container mb-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="navbar-brand logo" />
                <AppNav />
                <AuthNav />
            </div>
        </nav>
        // </div>
    );
};

export default NavBar;