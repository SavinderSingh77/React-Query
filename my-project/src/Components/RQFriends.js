import { useQuery } from "react-query";
async function getFriends() {
  const response = await fetch("http://localhost:4000/friends");
  const data = await response.json();
  return data;
}
const RQFriends = () => {
  //By default, every query result that we get from the useQuery hook is cached for 5 minutes, and React Query relies on this cached result for subsequent requests. Therefore, the first time we visit the RQFriends page, isLoading will become true, and we will see the Loading text. However, for the rest of the time, we visit the page, we won't see the Loading text because isLoading will remain false. Nonetheless, React Query understands that the API data might have changed, so it will run a background fetch. If the data has changed, it will replace the cached data. To check whether this background fetching is occurring, we have the isFetching flag in the useQuery Hook. We can also change the cached time by passing a third argument in the useQuery hook, and after the cache time, the cached result will be garbage collected, and we will see isLoading true again when we visit the page.

  const { isLoading, isError, data, error, isFetching } = useQuery(
    ["RQFriends"],
    getFriends,
    {refetchOnMount: false, refetchOnWindowFocus: true, 
    }
  );

  console.log(isLoading, isFetching);
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
        {error.message}
      </div>
    );
  }
  return (
    <div className="h-1 font-bold text-red-700 text-center">
      {data?.map((friends) => (
        <h3 key={friends.id}>{friends.name}</h3>
      ))}

      <button>Click me</button>
    </div>
  );
};
export default RQFriends;
