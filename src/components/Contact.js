import styles from './Contact.module.css'

function Contact() {
    return (
        <div>
            <div className={styles.contact_title}>
                <h1>Como você prefere falar conosco</h1>
            </div>

            <div className={styles.contacts}>
                <div className={styles.email}>
                    <img src='images/envelope.png' alt='logo-email'/>
                    <h2>Email</h2>
                    <label>Tem alguma dúvida ?</label>
                    <p>priceless@gmail.com</p>
                </div>

                <div className={styles.phone}>
                <img src='images/phone-call.png' alt='logo-email'/>
                    <h2>Telefone</h2>
                    <label>Você pode nos ligar a qualquer hora</label>
                    <p>+55 (10) 999102212</p>
                </div>

                <div className={styles.chat}>
                    <img src='images/messages.png' alt='logo-email'/>
                    <h2>Chat</h2>
                    <label>Precisa de ajuda agora ?</label>
                    <p>Basta abrir o chat no App</p>
                </div>
            </div>
        </div>
    )
}

export default Contact