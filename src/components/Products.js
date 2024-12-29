function Products({src,name,price}) {
    return(
        <div class="show-item">
            <img src={src} alt=""></img>
            <label className="product-name" for="img">{name}</label>
            <label className="product-price" for="img">R$ {price}</label>
            <p>Ver mais</p>
        </div>
    );
}

export default Products