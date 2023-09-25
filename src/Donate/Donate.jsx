import { useLoaderData, useParams } from "react-router-dom";

const Donate = () => {
    const cards = useLoaderData();
    const cardId = useParams()

    const cardIdDetails = cards.find(card => card.id ===cardId);

    console.log(cardId,cardIdDetails)
    return (
        <div>
            donate
        </div>
    );
};

export default Donate;