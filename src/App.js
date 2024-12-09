import Rooms from './components/Rooms';
import Products from './components/Products';

import './App.css';

function App() {
  return (
      <div>
        <header>
          <div class="title">
              <div class="left">
                  <img src=" images/WhatsApp Image 2024-04-19 at 16.58.59.png" alt="logo"></img>
                  <h1>Your Home is Priceless</h1>
              </div>

              <div class="right">
                  <label for="h1" onclick="">Contact</label>
                  <label for="h1">About us</label>
                  <label for="h1">Visit us</label>
              </div>
          </div>
          
          <div class="slide-show">

            <div class="slides">
                <input type="radio" name="radio-btn" id="radio1"></input>
                <input type="radio" name="radio-btn" id="radio2"></input>
                <input type="radio" name="radio-btn" id="radio3"></input>
                <input type="radio" name="radio-btn" id="radio4"></input>

                <div class="slide first">
                    <img src="images/sala-de-estar.webp" alt="Imagem 1"></img>
                </div>

                <div class="slide">
                    <img src="images/cozinha.avif" alt="Imagem 2"></img>
                </div>

                <div class="slide">
                    <img src="images/lavanderia.jpeg" alt="Imagem 3"></img>
                </div>

                <div class="slide">
                    <img src="images/banheiro.jpg" alt="Imagem 4"></img>
                </div>

                <div class="navigation-auto">
                    <div class="auto-btn1"></div>
                    <div class="auto-btn2"></div>
                    <div class="auto-btn3"></div>
                    <div class="auto-btn4"></div>
                </div>
            </div>

            <div class="manual-navigation">
                <label for="radio1" class="manual-btn"></label>
                <label for="radio2" class="manual-btn"></label>
                <label for="radio3" class="manual-btn"></label>
                <label for="radio4" class="manual-btn"></label>
            </div>
            
        </div>

        <div class="search-container">
            <input type="text" name="search" class="search" placeholder="What are you looking for ?"></input>
        </div>

        <div class="options">

            <Rooms name="Living-room"></Rooms>

            <Rooms name="Kitchen"></Rooms>

            <Rooms name="Bathroom"></Rooms>

            <Rooms name="Bedroom"></Rooms>

            <Rooms name="Dining-room"></Rooms>

            <Rooms name="Laundry"></Rooms>
        </div>

        
        
        </header>

    <section>
        <h2>Recomended Products</h2>
        <hr></hr>
        <div class="catalogue">

            <Products 
                    src="images/mid-century-modern-living-room-interior-design-with-monstera-tree.jpg" 
                    name="Cadeira Sala de Estar Madeira Acolchoada" 
                    price="469,99"
            ></Products>

            <Products
                src="https://img.freepik.com/fotos-gratis/fundo-do-quarto-para-chamadas-de-zoom_52683-95239.jpg?ga=GA1.1.91903197.1721123364&semt=ais_hybrid"
                name="Cama Queen Size Algodão"
                price="2.600,00"
            ></Products>

            <Products
                src="https://img.freepik.com/fotos-gratis/sala-de-estar-chique-com-estetica-moderna-e-luxuosa-de-meados-do-seculo-com-sofa-de-veludo-cinza-e-tapete-azul_53876-132809.jpg?ga=GA1.1.91903197.1721123364&semt=ais_hybrid"
                name="Sofá 3 Lugares Veludo Cinza"
                price="1.850,00"
            ></Products>

            <Products
                src="https://img.freepik.com/fotos-premium/a-luxuosa-e-moderna-sala-de-jantar-possui-uma-mesa-de-jantar-de-madeira-iluminada-por-luzes-suspensas_295714-4014.jpg?ga=GA1.1.91903197.1721123364&semt=ais_hybrid"
                name="Mesa de Jantar 8 Lugares Madeira "
                price="1.300,00"
            ></Products>

            <Products
                src="https://img.freepik.com/fotos-premium/desenho-elegante-de-sala-de-estar-leve-foto_195114-29731.jpg?ga=GA1.1.91903197.1721123364&semt=ais_hybrid"
                name="Mesa de Jantar 6 Lugares Madeira Envernizada"
                price="800,00"
            ></Products>

            <Products
                src="https://img.freepik.com/fotos-premium/mesa-de-cafe-de-madeira-com-planta-de-casa-e-cesta-de-vime-perto-do-sofa-cinza-na-sala-de-estar_1109006-34307.jpg?ga=GA1.1.91903197.1721123364&semt=ais_hybrid"
                name="Mesa de Centro Madeira Circular"
                price="369,90"
            ></Products>

            <Products
                src="https://img.freepik.com/fotos-premium/interior-da-sala-de-estar-em-estilo-moderno_38322-452.jpg?ga=GA1.1.91903197.1721123364&semt=ais_hybrid"
                name="Sofá 2 lugares Branco"
                price="1.560,99"
            ></Products>

            <Products
                src="https://img.freepik.com/fotos-premium/foto-de-uma-confortavel-mesa-de-jantar-de-carvalho-de-heranca-moderna_1077802-134194.jpg?ga=GA1.1.91903197.1721123364&semt=ais_hybrid"
                name="Mesa de Jantar 8 Lugares Madeira Pinheiro"
                price="3.800,00"
            ></Products>

            <Products
                src="https://img.freepik.com/fotos-gratis/desenho-interior-moderno-e-realista_23-2151439820.jpg?ga=GA1.1.91903197.1721123364&semt=ais_hybrid"
                name="Armário Clássico Laranja"
                price="749,99"
            ></Products>
            
        </div>
    </section>
    <footer>
        <div class="footer-container">
            <div class="footer-left">
                <img src="images/WhatsApp Image 2024-04-19 at 16.58.59.png" alt="logo" class="footer-logo"></img>
                <h2>Contact Us</h2>
                <figure>
                    <img src="images/instagram.png" alt="instagram"></img>
                    <img src="images/o-email.png" alt="email"></img>
                    <img src="images/linkedin.png" alt="linkedin"></img>
                    <img src="images/whatsapp.png" alt="whatsapp"></img>
                </figure>
            </div>

            <div class="footer-right">
                <figure>
                    <img src="images/bloqueado.png" alt="privacy"></img>
                    <figcaption>Privacidade</figcaption>
                </figure>

                <figure>
                    <img src="images/maleta.png" alt=""></img>
                    <figcaption>Politics</figcaption>
                </figure>

                <figure>
                    <img src="images/acessibilidade.png" alt=""></img>
                    <figcaption>Acessibility</figcaption>
                </figure>

                <figure>
                    <img src="images/smartphone.png" alt=""></img>
                    <figcaption>Mobile Version</figcaption>
                </figure>

                <figure>
                    <img src="images/patrocinador.png" alt=""></img>
                    <figcaption>Sponsors</figcaption>
                </figure>
                
                <figure>
                    <img src="images/proteger-dados.png" alt=""></img>
                    <figcaption>License</figcaption>
                </figure>
            </div>
        </div>
        
        <p class="copyright">&COPY; Todos os direitos reservados</p>
    </footer>
      </div>
  );
}

export default App;
