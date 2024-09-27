const Navigation = () => {

    return <nav className="container" >
        <div className="logo">
            <img src="/images/brand_logo.png" alt="logo" />
        </div>

        <ul className='nav-links'>
            <li href="#">MENU</li>
            <li href="#">LOCAION</li>
            <li href="#">ABOUT</li>
            <li href="#">CONTRACT</li>
        </ul>
        <button className="btn-login">login</button>

    </nav>
};
export default Navigation;
