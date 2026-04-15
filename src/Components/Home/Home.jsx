import { } from "react-router";
import Banner from "./Pages/Banner";
import FriendCard from "../UI/FriendCard";
import useFriend from "../../hooks/useFriend";
import Loading from "../UI/Loading";

const Home = () => {
  const {friends, loading} = useFriend()

  return (
    
    <div className="min-h-screen container mx-auto px-3">
      <Banner data={friends}></Banner>
      
      <h2 className="text-3xl font-semibold my-3">Your Friends </h2>
      { loading? <Loading></Loading> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-12">
        {friends.map((data) => (
          <FriendCard key={data.id} data={data}></FriendCard>
        ))}
      </div>}
    </div>
  );
};

export default Home;
