import PropTypes from "prop-types";

export default function Square(props = {}) {
  const { width, height, background,price, message, items } = props;
  return (
    <div 
      style={{
        width: width,
        height: height,
        background: background,
      }}
      className="container"
    >
      <h1 className="plans">{message}</h1>
      <h2 className="prices">{price}
      </h2>
    
      <h2>
      <ul>
        {items.map((element, index) => (
          <li key={index} className={element.isAvailable ? "" : "disabled"}>
            {element.isAvailable ? "✅" : "❌"} {element.name}
          </li>
        ))}
      </ul>
      </h2>
      <input className="buttons" type="button" value="Buy"></input>
    </div>
  );
}


Square.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  background: PropTypes.string,
  price: PropTypes.string,
  message: PropTypes.string,
  items: PropTypes.array,
};
