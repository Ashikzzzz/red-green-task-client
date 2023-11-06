import List from "../components/List";
import Task from "../components/Task";

const Home = () => {
  return (
    <div className="flex justify-center  items-center h-screen">
      <div className="  grid lg:grid-cols-12 grid-cols-1 ">
        <div className=" col-span-2">
          <List></List>
        </div>
        <div className="col-span-10">
          <Task></Task>
        </div>
      </div>
    </div>
  );
};

export default Home;
