import styles from './Visit.module.css'

function Visit() {
    return(
        <div>
            <div className={styles.visit_title}>
                <h1>
                    Visit Us
                </h1>
            </div>

            <div className={styles.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.4896740474505!2d-37.105641325140695!3d-10.926335089231731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab2423713aed3%3A0xdc26874c8378592c!2sUniversidade%20Federal%20de%20Sergipe!5e0!3m2!1spt-BR!2sbr!4v1736363299643!5m2!1spt-BR!2sbr" 
                    className={styles.map_location}/>
            </div>
            <div className={styles.locations_container}>
                <div className={styles.locations}>
                    <h2>Our Stores</h2>
                    <div className={styles.locations_left}>
                        <img src='./images/house-chimney.png' alt=''/>
                        <p>Rosa Elze, São Cristóvão - SE, 49100-000</p>
                        <img src='./images/house-chimney.png' alt=''/>
                        <p>Rosa Elze, São Cristóvão - SE, 49100-000</p>
                    </div>
                    
                    <div className={styles.locations_right}>
                        <img src='./images/house-chimney.png' alt=''/>
                        <p>Rosa Elze, São Cristóvão - SE, 49100-000</p>
                        <img src='./images/house-chimney.png' alt=''/>
                        <p>Rosa Elze, São Cristóvão - SE, 49100-000</p>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default Visit