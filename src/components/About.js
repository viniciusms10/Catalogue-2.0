import ScrollReveal from "scrollreveal"
import { useEffect } from "react";
import styles from "./About.module.css"

function About() {
    useEffect(() => {

        const revelar = ScrollReveal({
            origin: "bottom",
            distance: "50px",
            duration: 800,
            delay: 300,
            reset: true,
        })
    
        revelar.reveal(".about_story",{interval:500})
    }, [])

    return(
        <div>
            <div className={styles.about_title}>
                <h1>
                    About Us
                </h1>
            </div>

            <div className="about_story">
                <img src="images/LogoOficial.png" alt=""/>
                <p>Bem-vindo à Priceless Móveis, onde o design encontra a funcionalidade e a qualidade é valorizada acima de tudo. 
                    Somos uma empresa comprometida em transformar espaços em experiências únicas, 
                    oferecendo móveis que combinam sofisticação, durabilidade e conforto.</p>
            </div>

            <div className="about_story">
                <p>Na Priceless, acreditamos que cada peça de mobiliário deve refletir personalidade e estilo, ao mesmo tempo em que proporciona praticidade e bem-estar. 
                    Nosso portfólio abrange desde móveis clássicos e atemporais até peças modernas e inovadoras, 
                    todas cuidadosamente projetadas para atender às necessidades e desejos de nossos clientes.</p>
                    
                <img src="https://media.istockphoto.com/id/1181691218/pt/foto/blue-prints-color-swatch-pencil-colors-sketches-plans-and-documents-for-a-home-renovation.jpg?s=1024x1024&w=is&k=20&c=LlznxwAhKDFu_ofBiSXtSDGeLeGmo_O0K_MkUO_66Vw=" alt=""/>
            </div>

            <div className="about_story">
                <img src="https://images.pexels.com/photos/15016523/pexels-photo-15016523/free-photo-of-homem-trabalhando-industria-de-pe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <p>Com foco em excelência, trabalhamos com materiais de alta qualidade e processos de fabricação que respeitam o meio ambiente, garantindo produtos que são verdadeiramente priceless – 
                    sem preço no que diz respeito ao valor que agregam ao seu lar ou ambiente profissional.</p>
            </div>

            <div className="about_story">
                <p>Nossa missão é criar mais do que móveis; queremos criar conexões emocionais e ambientes que inspirem. 
                    Seja para renovar sua casa, montar um escritório ou criar um espaço personalizado, 
                    a Priceless Móveis está aqui para tornar seus sonhos realidade.</p>

                    <img src="https://media.istockphoto.com/id/1309085617/pt/foto/happy-young-woman-and-man-hugging-using-smartphone-together.jpg?s=1024x1024&w=is&k=20&c=-11AmYIABR1Jus3hyyj0UFy_2BvsNpKVGOAYgvcuYWo=" alt=""/>
            </div>

            <div className="about_story">
                <img src="https://media.istockphoto.com/id/1434742171/pt/foto/laptop-ppt-presentation-business-meeting-and-team-working-on-review-for-new-digital-website.jpg?s=1024x1024&w=is&k=20&c=HB5PY4PCK3HoO2Fu3VhrsR8Y0VHAtt-9Vfy8y5VBPs4=" alt=""/>

                <p>Descubra a diferença que um toque de exclusividade pode fazer. Priceless Móveis – design que vale cada momento.</p>
            </div>
        </div>
    )
}



export default About