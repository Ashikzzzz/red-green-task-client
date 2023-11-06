import List from "../components/List";
import Task from "../components/Task";

const Home = () => {
  return (
    <div className="flex justify-center  items-center h-screen">
      <div className="grid lg:grid-cols-2 grid-cols-1 ">
        <div className="w-56 lg:w-56">
          <List></List>
        </div>
        <div className="w-full">
          <Task></Task>
        </div>
      </div>
    </div>
  );
};

export default Home;
