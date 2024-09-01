import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
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

  const openModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.showModal(); // Open the modal when the button is clicked
    }
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Login</h3>
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
            {/* button */}
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white px-4 py-2 hover:bg-pink-800 duration-300 rounded-md"
              >
                Login
              </button>
              <p>
                Not Registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
