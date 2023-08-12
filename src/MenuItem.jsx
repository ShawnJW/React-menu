
function MenuItem({ id, title, category, price, img, desc }) {
  return (
    <li className='menu-item' key={id}>
            <img className='img' src={img} alt={title} />
        <div className="item-info">
            <header>
                <h5>{title}</h5>
                <h5 className="item-price">${price}</h5>
                <h5 className="category">{category}</h5>
            </header>
            <p className="item-text">{desc}</p>
        </div>
    </li>
  );
}

export default MenuItem;