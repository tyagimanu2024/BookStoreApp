import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"; // Don't forget to import useForm

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Log form data to the console
    // Handle additional form submission logic here

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
          {/* Name */}
          <div className="mt-4">
            <span>Name</span>
            <br />
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 border rounded-md outline-none mt-4"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">
                {errors.name.message}
              </p>
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
