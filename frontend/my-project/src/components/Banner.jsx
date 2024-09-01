import book from "../../public/book.jpg";
const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row md:space-x-20 my-10">
        <div className="order-2 md:order-1 w-full md:w-1/2 md:mt-32 mt-12">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello,welcomes here to learn something new{" "}
              <span className="text-pink-500">everyday!!!</span>
            </h1>
            <p className="text-xl">
<h1 className="mb-12 text-6xl text-center hover:text-pink-500   font-bold  ">THE BOOKERY</h1>
            We're absolutely thrilled to have you here! Whether you're a lifelong book lover or just beginning your literary journey, our store is a haven for all who cherish the magic of reading. Dive into our carefully curated collection, where every book is a new adventure waiting to be explored.

At <h1>THE BOOKERY!</h1> <br /> <h1 className=" text-4xl mb-2 text-pink-500">WE</h1> believe that every book has the power to inspire, enlighten, and transform. We're passionate about helping you discover stories that resonate with you, whether you're seeking to expand your mind, escape into a different world, or simply find a cozy read for a quiet afternoon.

So grab a cup of tea, settle into a comfy spot, and let your next great read find you. We're here to make your reading experience as wonderful as possible, and we're excited to share the joy of books with you.

Happy reading!
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className=" mt-6 btn btn-secondary">Secondary</button>
        </div>
        <div className="order-1 w-full md:w-1/2 mt-24">
          <img src={book} className="w-92 h-92 " alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
