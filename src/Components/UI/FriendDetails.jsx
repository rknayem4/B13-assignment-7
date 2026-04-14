import React from "react";
import { useParams } from "react-router";
import useFriend from "../../hooks/useFriend";
import Loading from "./Loading";
import DetailCard from "./DetailCard";

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, loading } = useFriend();
  const friendData = friends.find((res) => String(res.id) === id);

  // console.log(friendData);
  return (
    <div className="min-h-screen container mx-auto">
      {loading ? (
        <Loading />
      ) : (
        <DetailCard friendData={friendData}></DetailCard>
      )}
    </div>
  );
};

export default FriendDetails;
