function Nav(){
    return (
        <nav className="top__menu" style={{backgroundColor: "white"}}>
            <span></span>
            <ul>
                {/* <router-link to="/login"> */}
                    <button className="pub only__border">Fazer login</button>
                {/* </router-link> */}
            </ul>
        </nav>
    )
}

export default Nav;