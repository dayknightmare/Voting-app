import Link from "next/link";


interface MenuItens {
    type: string;
    text: string;
    link?: string;
    icon?: string;
}


function Nav(props){
    const {colors, itens} = props;
    const availables = ["button", 'li', 'a'];

    return (
        <nav className="top__menu" style={{backgroundColor: colors || "#fff"}}>
            <span></span>
            <ul>
                {
                    itens && itens.map((e: MenuItens) => (
                        availables.includes(e.type) ? (
                            <>
                                {e.type.toLowerCase() == "a" ? (
                                    <Link href={e.link}>
                                        <li>{e.icon ? (
                                            <i className={e.icon}></i>
                                        ) : (null)} &nbsp;{e.text}</li>
                                    </Link>
                                ) : (null)}

                                {e.type.toLowerCase() == "li" ? (
                                    <li>{e.icon ? (
                                        <i className={e.icon}></i>
                                    ) : (null)} &nbsp;{e.text}</li>
                                ) : (null)}

                                {e.type.toLowerCase() == "button" ? (
                                    <Link href={e.link}>
                                        <li>
                                            <button className="pub only__border">{e.icon ? (
                                                <i className={e.icon}></i>
                                            ) : (null)} &nbsp;{e.text}</button>
                                        </li>
                                    </Link>
                                ) : (null)}
                            </>
                        ) : (null)
                    ))
                }
               
            </ul>
        </nav>
    )
}

export default Nav;