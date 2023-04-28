import { useState } from 'react';
import Buscador from '../../componentes/Buscador';
import Ordenador from '../../componentes/Ordenador';
import banner from '../../assets/banner.jpg';
import styles from './Inicio.module.scss';
import Itens from 'componentes/Itens';

export default function Inicio() {
    const [busca, setBusca] = useState("");
    const [ordenador, setOrdenador] = useState("");

    return (
        <div className={styles.cardapio}>
            <div className={styles.banner}>
                <h1 className={styles.banner__text}>As melhores comidas mexicanas da cidade!</h1>
                <img src={banner} alt='Banner' className={styles.banner__img}/>
            </div>
            <h1 className={styles.cardapio__titulo}>Nosso cardápio</h1>
            <div className={styles.cardapio__filtros}>
                <Buscador busca={busca} setBusca={setBusca}/>
                <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
            </div>
            <Itens busca={busca} ordenador={ordenador}/>
        </div>
    );
}