import { useState } from "react";
import { apiVoting } from "../apis";
import Guard from "../components/guardLogin";
import Nav from "../components/navBar";


function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [renderPage, setRenderPage] = useState(false);
    
    Guard(0).then((re: boolean )=> {
        if (re){
            setRenderPage(re)
        }
    })

    const makeLogin = (e) => {
        e.preventDefault();

        apiVoting.post("/login", {
            email: email,
            password: password
        })
            .then(re => {
                if (re.data.token){
                    localStorage.setItem('token', re.data.token)
                    window.location.href = "/home"
                }
                
                else{
                    alert(re.data)
                }
            })
    }

    return renderPage &&
        <>
            <Nav colors="#fff" itens={[
                {
                    type: "a",
                    text: "Home",
                    link: "/"
                },
                {
                    type: "button",
                    text: "Cadastro",
                    link: "/cadastro",
                    icon: "vi-login"
                }
            ]}></Nav>

            <main className="h-100">
                <div className="grid grid__2 h-100">
                    <div className="loginImg"></div>
                    <form className="flex__column flex__align__center flex__justify__center" onSubmit={makeLogin}>
                        <div className="w-50">
                            <h3 className="padb-2">Fazer login</h3>
                            <div className="input__hero__label padb-1 w-100">
                                <input className="input w-100" type="email" required placeholder=" "  value={email} onChange={e => setEmail(e.target.value)}/>
                                <label>Email</label>
                            </div>

                            <div className="input__hero__label padb-1 w-100">
                                <input className="input w-100" type="password" required placeholder=" " value={password} onChange={e => setPassword(e.target.value)}/>
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
    
}

export default Login;