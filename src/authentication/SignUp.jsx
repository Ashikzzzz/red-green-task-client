import Lottie from "lottie-react";
import animation from "../assets/animation/animation_lk5um5zg.json";
import { Link } from "react-router-dom";

const SignUp = () => {
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

            <form>
              <div className="grid grid-cols-1">
                <div className="mt-8">
                  <label className="label">
                    <span className="label-text">What is your name?</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered input-primary w-full max-w-xs "
                  />
                </div>
                <div className="mt-1">
                  <label className="label">
                    <span className="label-text"> Your Email?</span>
                  </label>
                  <input
                    name="email"
                    type="text"
                    placeholder="Your Email"
                    className="input input-bordered input-primary w-full max-w-xs "
                  />
                </div>
                <div className="mt-1">
                  <label className="label">
                    <span className="label-text"> Your password?</span>
                  </label>
                  <input
                    type="text"
                    name="password"
                    placeholder="Your Password"
                    className="input input-bordered input-primary w-full max-w-xs "
                  />
                </div>
              </div>
              <p className="font-normal text-sm mt-1">
                {" "}
                Already Have an Account? <Link to="/login">Login</Link>
              </p>
              <button
                type="submit"
                className="text-sm mt-6  w-1/2 mx-auto border-b-2  btn btn-primary "
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
