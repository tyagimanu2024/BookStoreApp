import Cards from "./Cards";
import list from "../../public/list.json";
import {Link} from "react-router-dom";
const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-bold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-10 leading-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            natus veritatis consequuntur, mollitia velit eligendi illum debitis
            veniam. Enim molestias, ratione sed accusantium odio quisquam vitae
            neque officia, at tenetur voluptatibus? Aspernatur ullam rem, eum
            est similique accusamus distinctio itaque perferendis reiciendis,
            eius hic aliquam doloremque consectetur sequi porro quae suscipit
            commodi ipsa? Ad, ab neque?
          </p>
      <Link to="/">
      <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration 300 mt-6">
            Back
          </button>
      </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Course;
