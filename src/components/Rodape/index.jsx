import styles from './Rodape.module.css';
import { ReactComponent as MarcaRegistrada } from 'assets/marca-registrada.svg';

function Rodape() {
    return(
        <>
        <footer className={styles.rodape}>
            <MarcaRegistrada />
            Sony Pictures Television Inc.
        </footer>
        </>
    )
}

export default Rodape;