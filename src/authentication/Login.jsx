import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import animation from "../assets/animation/animation_lk5um5zg.json";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        " https://red-green-task-server.vercel.app/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console
        .log(response)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
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
          <div>
            <h1 className="text-5xl font-bold mt-16 text-center text-cyan-900">
              Login Here
            </h1>
            <div className="grid lg:grid-cols-2 grid-cols-1">
              {/* lottie  */}
              <div className="flex items-center ">
                <Lottie
                  className="w-88 ml-60"
                  animationData={animation}
                  loop={true}
                />
              </div>

              <div className="mt-20">
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
                    create an account? <Link to="/signup">Signup</Link>{" "}
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
    </div>
  );
};

export default Login;
