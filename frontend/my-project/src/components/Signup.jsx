import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullName: data.fullName,  // Corrected to match the form input name
      email: data.email,
      password: data.password,
    };

    await axios.post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("Signup Successfully");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error: " + err.response?.data?.message || err.message);
      });

    // Close the modal after form submission
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.close();
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="md:w-1/3 w-full bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>

          <h3 className="font-bold text-lg text-center mb-4">Signup</h3>
          {/* Full Name */}
          <div className="mt-4">
            <span>Full Name</span>
            <br />
            <input
              {...register("fullName", { required: "Full Name is required" })} // Changed "name" to "fullName"
              type="text"
              placeholder="Enter your full name"
              className="w-full px-3 border rounded-md outline-none mt-4"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
            )}
          </div>
          {/* Email */}
          <div className="mt-4">
            <span>Email</span>
            <br />
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Enter your e-mail"
              className="w-full px-3 border rounded-md outline-none mt-4"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          {/* Password */}
          <div className="mt-4">
            <span>Password</span>
            <br />
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 border rounded-md outline-none mt-4"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          {/* Button */}
          <div className="flex flex-col items-center mt-4">
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 hover:bg-pink-700 duration-300 rounded-md"
            >
              Signup
            </button>
            <p className="mt-4">
              Have an account?{" "}
              <Link
                to="/login"
                className="underline text-blue-500 cursor-pointer"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
