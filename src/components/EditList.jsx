import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const EditList = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <h2 className="text-2xl lg:text-2xl text-center">Edit List</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xs">
          <div className="form-control">
            <input
              type="text"
              className="input input-bordered w-full mt-4"
              {...register("name")}
            />
          </div>
          <Link to="/" className="flex justify-center mt-4">
            {" "}
            {/* Ensuring Link is a flex container */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              +Save
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default EditList;
