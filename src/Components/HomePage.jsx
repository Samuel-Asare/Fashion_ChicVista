import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-screen h-screen bg-[url('https://images.unsplash.com/photo-1611824204322-24963b44d68b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover bg-center flex justify-between items-center bg-black bg-blend-multiply bg-opacity-20">
      <div className="w-1/2  h-full flex items-start justify-center flex-col ml-4">
        <h1 className="font-bold text-white text-5xl">
          Embrace Elegance, Define Style
        </h1>
        <h6 className="mt-4 text-white tracking-wide">
          Curated Collections for the Modern Maven
        </h6>
        <Link to="/signup">
          <button className="mt-2 bg-blue-800 font-bold text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Create Account
          </button>
        </Link>
      </div>

      <div className="designs w-1/2   flex items-end justify-center h-full flex-col text-end mr-4">
        <div className=" h-[13px] w-[13px] rounded-full right-4 bg-white mb-10 bg-opacity-40"></div>
        <div className=" h-[13px] w-[13px] rounded-full right-4 bg-white mb-10 bg-opacity-40"></div>
        <div className=" h-[13px] w-[13px] rounded-full right-4 bg-white mb-10 bg-opacity-40"></div>
        <div className=" h-[13px] w-[13px] rounded-full right-4 bg-white mb-10 bg-opacity-40"></div>
        <div className=" h-[13px] w-[13px] rounded-full right-4 bg-white mb-10 bg-opacity-40"></div>
      </div>
    </div>
  );
};

export default HomePage;
