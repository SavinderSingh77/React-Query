import { useQuery } from "@tanstack/react-query";
async function getFriends() {
  const response = await fetch("http://localhost:4000/friends");
  const data = await response.json();
  return data;
}
const RQFriends = () => {
  const { isLoading, isError, data } = useQuery(["RQFriends"], getFriends);
  console.log(isLoading, isError, data);
  if (isLoading) {
    return (
      <div className="p-5 h-[300px] font-bold text-red-700 text-center">
        Loading....
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-5 h-[300px] font-bold text-red-700 text-center">
        Error Occured!
      </div>
    );
  }
  return (
    <div className="h-1 font-bold text-red-700 text-center">
      {data?.map((friends) => (
        <h3 key={friends.id}>{friends.name}</h3>
      ))}
    </div>
  );
};
export default RQFriends;
