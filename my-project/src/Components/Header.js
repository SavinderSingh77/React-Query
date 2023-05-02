import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-3 w-full h-25 bg-red-400 text-stone-900 flex justify-center items-center gap-8 cursor-pointer">
      <Link to="/home">
        {" "}
        <span>Home</span>{" "}
      </Link>
      <Link to="/friends">
        {" "}
        <span>Friends</span>{" "}
      </Link>
      <Link to="/rqfriends">
        {" "}
        <span>RQFriends</span>{" "}
      </Link>
    </div>
  );
};
export default Header;
