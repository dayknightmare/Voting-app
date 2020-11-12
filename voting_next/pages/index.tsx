import { useState } from "react";
import Nav from "../components/navBar";


function Home(){
    return (
        <>
            <Nav></Nav>
            <main>
                <div className="banner flex__column flex__justify__center flex_align__center padh-2">
                    <h1>Bem vindo ao Voting</h1>
                    <p>Um projeto de votação, para a imersão ao React e NextJS</p>

                    <br />
                    <div>
                        <button className="pub">Cadastre-se</button>
                    </div>
                </div>
            </main>
        </>
    );
    
}

export default Home;