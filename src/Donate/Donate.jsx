import { useLoaderData, useParams } from "react-router-dom";

const Donate = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const cardIdInt = parseInt(id);
  const card = cards.find((card) => card.id === cardIdInt);
  const {
    picture,
    description,
    title,
    text_button_bg_color,
    price
  } = card;

  const btnStyle = {
    backgroundColor: text_button_bg_color[0],

  };

  return (
    <div className="w-[80%] mx-auto my-10 ">
      <div className="relative flex justify-center">
        <img src={picture} alt= {title} className="w-full lg:h-[700px] lg:[1024px] xl:w-[1300px]" />
        <div className="absolute bottom-0 left-0 w-full md:h-[30%] h-[40%] lg:left-0 xl:left-[117px] bg-black opacity-50 z-10 lg:w-[100%] xl:w-[1300px]"></div>
        <button style={btnStyle} className="absolute left-4 bottom-3 md:bottom-10 lg:left-40 lg:bottom-14  text-white py-2 px-4 rounded transition duration-300 z-10">
          Donate ${price}
        </button>
      </div>
      <div className="my-5 xl:w-[85%] mx-auto">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};

export default Donate;
