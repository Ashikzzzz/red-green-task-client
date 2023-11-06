import { Link } from "react-router-dom";

const List = () => {
  return (
    <div className="bg-white w-full min-h-[30rem] flex flex-col justify-between rounded-lg">
      <div className="mb-4 text-center text-black mt-4 font-bold text-2xl">
        Lists
      </div>
      <div className="mx-auto mb-4">
        <Link to="/create-new-list">
          {" "}
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            + New List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default List;
