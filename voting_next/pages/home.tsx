import { useState } from 'react';
import Guard from '../components/guardLogin';


const Home = () => {
    const [renderPage, setRenderPage] = useState(false);

    Guard(1).then((re: boolean) => {
        if (re){
            setRenderPage(re)
        }
    })

    return renderPage && <>
        asdsa
    </>
    
}

export default Home;