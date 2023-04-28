import Logo from "../Logo";
import styles from './Cabecalho.module.scss'
import CabecalhoLinks from "../CabecalhoLinks";

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Logo/>
            <ul className={styles.cabecalho__informacoes}>
                <li>
                    <CabecalhoLinks to="/nossasOpcoes">
                        Nossas opções
                    </CabecalhoLinks>
                </li>
                <li>
                    <CabecalhoLinks to="/sobreNos"> 
                        Sobre nós
                    </CabecalhoLinks>                
                </li>                
            </ul>
        </header>
    )
}