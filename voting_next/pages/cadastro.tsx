import Nav from "../components/navBar";
import { useState } from 'react';
import { apiVoting } from '../apis';
import Guard from "../components/guardLogin";


function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirme, setConfirme] = useState('');

    const [renderPage, setRenderPage] = useState(false);
    
    Guard(0).then((re: boolean) => {
        if (re){
            setRenderPage(re)
        }
    })

    const cadastrar = (e) => {
        e.preventDefault();

        if (password != confirme){
            return alert("Senhas não conferem")
        }

        apiVoting.post("/cadastro", {
            name: name,
            email: email,
            password: password,
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
                    text: "Login",
                    link: "/login",
                    icon: "vi-login"
                }
            ]}></Nav>

            <main className="h-100">
                <div className="grid grid__2 h-100">
                    <div className="loginImgVote"></div>
                    <form className="flex__column flex__align__center flex__justify__center" onSubmit={cadastrar}>
                        <div className="w-50">
                            <h3 className="padb-2">Fazer cadastro</h3>
                            <div className="input__hero__label padb-1 w-100">
                                <input className="input w-100" type="text" placeholder=" " required value={name} onChange={e => setName(e.target.value)}/>
                                <label>Nome</label>
                            </div>

                            <div className="input__hero__label padb-1 w-100">
                                <input className="input w-100" type="email" placeholder=" " required value={email} onChange={e => setEmail(e.target.value)}/>
                                <label>Email</label>
                            </div>

                            <div className="input__hero__label padb-1 w-100">
                                <input className="input w-100" type="password" placeholder=" " required value={password} onChange={e => setPassword(e.target.value)}/>
                                <label>Senha</label>
                            </div>

                            <div className="input__hero__label padb-1 w-100">
                                <input className="input w-100" type="password" placeholder=" " required value={confirme} onChange={e => setConfirme(e.target.value)}/>
                                <label>Confirme</label>
                            </div>

                            <button className="pub">Fazer cadastro</button>
                            <div className="w-100">
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </>
}

export default Cadastro;