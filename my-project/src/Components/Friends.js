import { useEffect, useState } from "react";

const Friends = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getFriends();
  }, []);
  async function getFriends() {
    try {
      const fetchData = await fetch("http://localhost:4000/friends");
      const jsonData = await fetchData.json();
      setData(jsonData);
    } catch {
      setData([
        { id: 404, name: "Error Occured", profession: "Error Occured" },
      ]);
    }
  }
  console.log(data);

  return !data ? (
    <div className="p-5 h-[300px] font-bold text-red-700 text-center">
      Loading....
    </div>
  ) : (
    <div className="h-[300px] p-15 font-bold text-red-700 text-center flex flex-col justify-center items-center">
      {data?.map((friends) => (
        <h3 key={friends.id}>{friends.name}</h3>
      ))}
    </div>
  );
};
export default Friends;
