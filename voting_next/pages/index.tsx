import Link from "next/link";
import { useState } from "react";
import Guard from "../components/guardLogin";
import Nav from "../components/navBar";

function Home(){
    const [renderPage, setRenderPage] = useState(false);
    
    Guard(0).then(re => {
        if (re){
            setRenderPage(re)
        }
    })
    
    return renderPage &&
        <>
            <Nav itens={[
                {
                    type: "button",
                    text: "Login",
                    link: "/login"
                }
            ]}></Nav>

            <main>
                <div className="banner flex__column flex__justify__center flex_align__center padh-2">
                    <h1>Bem vindo ao Voting</h1>
                    <p>Um projeto de votação, para a imersão ao React e NextJS</p>

                    <br />
                    <div>
                        <Link href="/cadastro">
                            <button className="pub">Cadastre-se</button>
                        </Link>
                    </div>
                </div>
            </main>
        </>
}

export default Home;