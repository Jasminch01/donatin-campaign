import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Category = ({ card }) => {
  const {id, category, category_bg_color, text_button_bg_color, title, picture } = card;

  const cardStyle = {
    backgroundColor: category_bg_color,
  };
  const textStyle = {
    color: text_button_bg_color[0],
};
const btnStyle = {
    color: text_button_bg_color[0],
    backgroundColor: text_button_bg_color[1],
}


  return (
    <Link to= {`/donate/${id}`}>
        <div>
            <img src={picture[0]} alt="" className="w-full"/>
        </div>
      <div style={cardStyle} className="p-5 rounded">
        <button style={btnStyle} className="p-2 rounded">{category}</button>
        <h1 style={textStyle} className="text-xl font-bold">{title}</h1>
      </div>
    </Link>
  );
};

Category.propTypes = {
  card: PropTypes.object.isRequired,
};
export default Category;
