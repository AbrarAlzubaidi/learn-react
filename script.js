function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class="logo">
                    <a class="navbar-brand" href="#"><i class="fa-brands fa-react"></i>ReactFacts</a>
                </div>
                    <div class="navbar-nav">
                        <p class="project">React Course - Project 1</p>
                    </div>
            </div>
        </nav>
    )
}


function Header() {
    return (
        <div>
            <h1 class="title">Fun facts about React</h1>
        </div>
    )
}
function List(){
    return(
        <ul class="list">
            <li class="point">Was first released in 2013</li>
            <li class="point">Was originally created by Jordan Walke</li>
            <li class="point">Has well over 100K stars on GitHub</li>
            <li class="point">Is maintained by Facebook</li>
            <li class="point">Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    )
}

ReactDOM.render(
    <div>
        <Navbar/>
        <Header />
        <List/>

    </div>, document.getElementById("root"));