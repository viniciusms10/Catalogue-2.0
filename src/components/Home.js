
import Rooms from './Rooms';
import Products from './Products';
import Slider from './Slider';


function Home() {
  return (
      <div>
        <header>
        
          
        <Slider/>
          

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
    
    </div>
  );
}

export default Home;
