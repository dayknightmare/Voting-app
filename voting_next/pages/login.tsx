import Nav from "../components/navBar";

function Login () {
    return (
        <>
            <Nav colors="#fff" itens={[
                {
                    type: "button",
                    text: "Home",
                    link: "/"
                }
            ]}></Nav>

            <main className="h-100">
                <div className="grid grid__2 h-100">
                    <div className="loginImg"></div>
                    <form className="flex__column flex__align__center flex__justify__center">
                        <div className="w-50">
                            <h3 className="padb-2">Fazer login</h3>
                            <div className="input__hero__label padb-1 w-100">
                                <input className="input w-100" type="text" placeholder=" " />
                                <label>Email</label>
                            </div>

                            <div className="input__hero__label padb-1 w-100">
                                <input className="input w-100" type="text" placeholder=" " />
                                <label>Senha</label>
                            </div>

                            <button className="pub">Fazer login</button>
                            <div className="w-100">
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login;