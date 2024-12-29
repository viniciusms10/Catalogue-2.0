

function Slider() {
    return (
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

                {/* <div class="navigation-auto">
                    <div class="auto-btn1"></div>
                    <div class="auto-btn2"></div>
                    <div class="auto-btn3"></div>
                    <div class="auto-btn4"></div>
                </div> */}
            </div>

            <div class="manual-navigation">
                <label for="radio1" class="manual-btn"></label>
                <label for="radio2" class="manual-btn"></label>
                <label for="radio3" class="manual-btn"></label>
                <label for="radio4" class="manual-btn"></label>
            </div>
            
        </div>
    )
}

    let count = 1;

    setInterval(function() {
        nextImage();
    },5000)

    function nextImage() {
       count++;
        if(count>4){
            count = 1;
        }

            document.getElementById("radio"+count).checked = true;
    }

export default Slider