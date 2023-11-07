import Lottie from "lottie-react";
import animation from "../assets/animation/animation_lk5um5zg.json";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        " https://red-green-task-server.vercel.app/api/v1/users/create-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(response);
          if (data.success === true) {
            Swal.fire({
              title: data.status,
              icon: data.status,
              confirmButtonColor: "var(--primary-color)",
              confirmButtonText: "OK",
              text: `${data.message}`,
            });
            console.log("User data sent successfully:", data);
          } else {
            Swal.fire({
              title: data.status,
              icon: data.status,
              confirmButtonColor: "var(--primary-color)",
              confirmButtonText: "OK",
              text: `${data.message}`,
            });
          }
        });
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error:", error.message);
    }
  };

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
                <p>
                  Already have an account? <Link to="/login">Login</Link>{" "}
                </p>
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
