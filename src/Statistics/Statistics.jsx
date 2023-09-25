import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const Statistics = () => {
  const [nodata, setNodata] = useState("");
  const [donation, setDonations] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    const donations = JSON.parse(localStorage.getItem("donations"));
    if (donations) {
      setDonations(donations);
    } else {
      setNodata("Not yet Donated ! Please Donate...");
    }
  }, []);

  const totalDonated = donation.reduce(
    (preValue, currentValue) => preValue + currentValue.price,
    0
  );
  const totalDonation = data.reduce(
    (preValue, currentValue) => preValue + currentValue.price,
    0
  );
  const totalDonationChat = [
    { name: "Your Donation", value: totalDonated },
    { name: "Total Donation", value: totalDonation },
  ];
  const COLORS = ["#00C49F", "#FF444A"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    );
  };
  return (
    <div>
      {nodata ? (
        <p className="text-center h-screen justify-center items-center text-3xl flex">
          {nodata}
        </p>
      ) : (
        <div
          className="flex justify-center my-20"
          style={{ maxWidth: "100%", height: 500 }}
        >
          <ResponsiveContainer>
            <PieChart width={400} height={400}>
              <Pie
                data={totalDonationChat}
                dataKey="value"
                nameKey="name"
                labelLine={false}
                label={renderCustomizedLabel}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default Statistics;
