import styles from '../Pages.module.scss'

export default function NossasOpcoes() {
    return (
        <div>
            <div className={styles.container}>
                <h2 className={styles.container__titulo}>Burrito</h2>
                <p className={styles.container__texto}>
                    Enroladinhos e com bastante recheio, que variam entre carne, queijo, tomate, chilli e muitos outros.
                </p>
                <p className={styles.container__texto}>
                    Uma das comidas típicas do México mais conhecidas entre os estrangeiros, os burritos são encontrados em todo canto, desde restaurantes requintados a barraquinhas na rua.
                </p> 
            </div>
            
            <div className={styles.container}>
                <h2 className={styles.container__titulo}>Guacamole</h2>
                <p className={styles.container__texto}>
                    Preparado com abacate, tomate, cebola, especiarias e temperos, o guacamole é um dos mais famosos pratos típicos do México, servida como acompanhamento de nachos ou no recheio de diversos quitutes.
                </p>
            </div>

            <div className={styles.container}>
                <h2 className={styles.container__titulo}>Nachos</h2>
                <p className={styles.container__texto}>
                    Os nachos são a versão frita dos pãezinhos de milho ou trigo. Os discos, porém, se transformam em triângulos crocantes, que se parecem com o famoso Doritos. Em geral, os nachos são acompanhados por guacamole, cheddar, chilli e muita, mas muita pimenta!
                </p>
            </div>

            <div className={styles.container}>
                <h2 className={styles.container__titulo}>Tacos</h2>
                <p className={styles.container__texto}>
                    No preparo de taco mexicano não pode faltar tortilha de milho, carne, suco de limão, creme azedo, cebola roxa e outros ingredientes opcionais que nossos clientes podem escolher.
                </p>
            </div>
        </div>
    )
}