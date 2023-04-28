import styles from './Buscador.module.scss'
import { BsSearch } from 'react-icons/bs';

export default function Buscador({busca, setBusca}) {
    return (
        <div className={styles.buscador}>
            <input
                value={busca}
                onChange={(evento) => setBusca(evento.target.value)}
                placeholder="Buscar"
            />
            <BsSearch
                className={styles.buscador__lupa}
                size={12}
            />
        </div>
    )
}
  