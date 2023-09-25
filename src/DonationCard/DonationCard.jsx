import PropTypes from "prop-types";

const DonationCard = ({ card }) => {
  const { picture, title, price, category_bg_color, text_button_bg_color, category } =
    card;

  const cardStyle = {
    backgroundColor: category_bg_color,
  };
  const textStyle = {
    color: text_button_bg_color[0],
  };
  const btnStyle = {
    color: text_button_bg_color[0],
    backgroundColor: text_button_bg_color[1],
  };
  const viewBtn = {
    backgroundColor: text_button_bg_color[0],
  };

  return (
    <div>
      <div style={cardStyle} className="p-5 md:flex gap-4 items-center rounded">
        <div>
          <img src={picture} alt={title} className="rounded" />
        </div>
        <div className="space-y-3 mt-3">
        <button style={btnStyle} className="p-2 rounded">{category}</button>
            <p className="font-semibold text-2xl">{title}</p>
            <p style={textStyle} className="text-base font-bold">$ {price}</p>
            <button style={viewBtn} className="text-white p-3 rounded font-bold">View Details</button>
        </div>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  card: PropTypes.object.isRequired,
};
export default DonationCard;
