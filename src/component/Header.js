import Navigation from "./Navigation"
function Header() {
    return (
        <section className="wrap">
            <div className="intro_bg">
                <img src={require("./images/cute-cat.jpg")} />
                <div className="fixed_search_area">
                    <form>
                        <input type="search" placeholder="Search" />
                        <span>
                            <img src={require("./images/search.jpg")} />
                        </span>
                    </form>
                </div>
                <Navigation />
            </div>
        </section>
    )
}

export default Header