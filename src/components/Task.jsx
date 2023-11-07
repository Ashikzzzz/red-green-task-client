import { Link } from "react-router-dom";
// import TaskTable from "./TaskTable";

const Task = () => {
  return (
    <div className="">
      <div className="bg-gray-100  min-h-[30rem] flex flex-col justify-between rounded-lg">
        <div className="mb-4 text-center text-black mt-4 font-bold text-2xl">
          Tasks
        </div>
        <div>
          <p className="mb-60 text-center">There have no task yet.</p>
        </div>
        <div>{/* <TaskTable></TaskTable> */}</div>
        <div className="mx-auto mb-4">
          <Link to="/create-new-list">
            {" "}
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              + New Task
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Task;
