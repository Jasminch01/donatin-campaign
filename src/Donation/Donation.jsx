import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [noDataFound, setNoDataFound] = useState("");
  const [isSeeAll, setIsSeeAll] = useState(false);
  console.log(isSeeAll);

  useEffect(() => {
    const donations = JSON.parse(localStorage.getItem("donations"));
    if (donations) {
      setDonations(donations);
    } else {
      setNoDataFound("No Data Found !");
    }
  }, []);
  return (
    <div>
      {noDataFound ? (
        <p className="text-center h-screen flex justify-center items-center text-2xl">{noDataFound}</p>
      ) : (
        <div>
          <div className="grid lg:grid-cols-2 w-[80%] mx-auto gap-5 my-10">
            {isSeeAll
              ? donations.map((card) => (
                  <DonationCard key={card.id} card={card}></DonationCard>
                ))
              : donations
                  .slice(0, 4)
                  .map((card) => (
                    <DonationCard key={card.id} card={card}></DonationCard>
                  ))}
          </div>
          <div>
            {donations.length >= 4 && (
              <div
                className={
                  isSeeAll ? "hidden" : "flex items-center justify-center my-5"
                }
              >
                <button
                  onClick={() => setIsSeeAll(!isSeeAll)}
                  className="p-3 bg-green-600 text-white rounded"
                >
                  See all
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
