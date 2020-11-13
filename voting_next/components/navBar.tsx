import Link from "next/link";

function Nav(props){
    const {colors, itens} = props;
    const availables = ["button", 'li', 'a'];

    return (
        <nav className="top__menu" style={{backgroundColor: colors || "#fff"}}>
            <span></span>
            <ul>
                {
                    itens && itens.map(e => (
                        availables.includes(e.type) ? (
                            <>
                                {e.type.toLowerCase() == "a" ? (<Link href={e.link}><li>{e.text}</li></Link>) : (null)}
                                {e.type.toLowerCase() == "li" ? (<li>{e.text}</li>) : (null)}
                                {e.type.toLowerCase() == "button" ? (<Link href={e.link}><button className="pub only__border">{e.text}</button></Link>) : (null)}
                            </>
                        ) : (null)
                    ))
                }
               
            </ul>
        </nav>
    )
}

export default Nav;