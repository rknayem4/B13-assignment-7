import { useLoaderData } from "react-router";
import Banner from "./Pages/Banner";
import FriendCard from "../UI/FriendCard";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="min-h-screen container mx-auto px-3">
      <Banner></Banner>
      <h2 className="text-3xl font-semibold my-3">Your Friends </h2>
      <div className="grid grid-cols-4 gap-5">
        {data.map((data) => (
          <FriendCard key={data.id} data={data}></FriendCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
