import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { AppsContext } from "../../Context/AppsContext";

const Stats = () => {
  const { friend } = useContext(AppsContext);
  const filterCall = friend.filter((item) => item.btn.toLowerCase() == "call");
  const filterText = friend.filter((item) => item.btn.toLowerCase() == "text");
  const filterVideo = friend.filter(
    (item) => item.btn.toLowerCase() == "video",
  );
  console.log(filterText);
  const data = [
    { name: "Call", value: filterCall.length, fill: "#0088FE" },
    { name: "Text", value: filterText.length, fill: "#00C49F" },
    { name: "Video", value: filterVideo.length, fill: "#FF8042" },
    // { name: "Group D", value: 300, fill: "#FFBB28" },
  ];
  return (
    <div className="min-h-screen max-w-250 mx-auto py-20">
      <h2 className="text-4xl font-bold">Friendship Analytics </h2>
      <div className="shadow rounded-xl p-6 m-6 ">
        <p className="text-gray-500 font-semibold">By Interaction Type </p>
        <PieChart
          className="mx-auto"
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend></Legend>
          <Tooltip></Tooltip>
        </PieChart>
      </div>
    </div>
  );
};

export default Stats;
