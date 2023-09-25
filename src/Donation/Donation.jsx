import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {

    const donations = JSON.parse(localStorage.getItem('donations'));

    console.log(donations)


    return (
        <div>
            <div className="grid lg:grid-cols-2 w-[80%] mx-auto gap-5 my-10">
                {
                    donations.map(card => <DonationCard key={card.id} card = {card}></DonationCard> )
                }
            </div>
            <div className="flex items-center justify-center my-5">
                <button className="p-3 bg-green-600 text-white rounded">See all</button>
            </div>
        </div>
    );
};

export default Donation;