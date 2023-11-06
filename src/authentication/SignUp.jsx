import Lottie from "lottie-react";
import animation from "../assets/animation/animation_lk5um5zg.json";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div>
        <div>
          <h1 className="text-5xl font-bold mt-16 text-center text-cyan-900">
            Sign Up Here
          </h1>
          <div className="grid lg:grid-cols-2 grid-cols-1">
            {/* lottie  */}
            <div className="flex items-center ">
              <Lottie
                className="w-96 ml-60"
                animationData={animation}
                loop={true}
              />
            </div>
            <div className="mt-10">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* name field  */}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">What is your name?</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name")}
                  />
                </div>

                {/* email filed  */}

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    type="email"
                    className="input input-bordered w-full max-w-xs"
                    {...register("email")}
                  />
                </div>
                {/* password filed  */}
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Your Password</span>
                  </label>
                  <input
                    type="password"
                    className="input input-bordered w-full max-w-xs"
                    {...register("password")}
                  />
                </div>

                <input
                  type="submit"
                  className="text-sm mt-6  w-1/2 mx-auto border-b-2  btn btn-primary "
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
