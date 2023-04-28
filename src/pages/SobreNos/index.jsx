import styles from '../Pages.module.scss'

export default function SobreNos() {
    return (
        <section className={styles.container}>
            <h2 className={styles.container__titulo}>Sobre nós</h2>
            <p className={styles.container__texto}>
                Bem-vindo ao CM, o seu destino para autêntica comida mexicana! Nós somos um restaurante recém-inaugurado que tem como objetivo proporcionar aos nossos clientes uma experiência gastronômica única e memorável.
            </p>
            <p className={styles.container__texto}>
                Fundado há cerca de 1 ano, o CM tem se destacado por oferecer poucas, porém deliciosas, variações de pratos mexicanos. Nossos chefs são apaixonados pela culinária mexicana e dedicam-se em criar pratos autênticos, preparados com ingredientes frescos e de qualidade, para trazer até você os sabores verdadeiros do México.
            </p>
            <p className={styles.container__texto}>
                Nossa equipe é composta por profissionais experientes que estão empenhados em proporcionar um serviço caloroso e amigável, garantindo que você tenha uma experiência agradável em nosso restaurante. Acreditamos que o bom atendimento é tão importante quanto a qualidade da comida servida.
            </p>
            <p className={styles.container__texto}>
                Acreditamos em qualidade acima de quantidade. Embora possamos oferecer poucas opções de pratos, cada um deles é cuidadosamente elaborado para garantir um sabor autêntico e delicioso. Nossos pratos são preparados com receitas tradicionais e outros clássicos da culinária mexicana, todos com o toque especial de nossos chefs talentosos.
            </p>
        </section>
    )
}