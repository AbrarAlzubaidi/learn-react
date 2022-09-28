const Navbar = (props) => {
    return (
        <nav className={props.lightMode ? "light" : ""}>
        <div className="container-fluid">
            <div className="logo">
                <a className="navbar-brand" href="/"><i class="fa-brands fa-react"></i>ReactFacts</a>
            </div>
                {/* <div className="navbar-nav">
                    <p className="project">React Course - Project 1</p>
                </div> */}
        </div>
        <div className="toggler">
            <p className="toggler-dark">Dark</p>
            <div className="toggler-slider" onClick={props.toggleLightMode}>
                <div className="toggler-slider-circle"></div>
            </div>
            <p className="toggler-light">Light</p>
        </div>
    </nav>
    );
  }

export default Navbar;