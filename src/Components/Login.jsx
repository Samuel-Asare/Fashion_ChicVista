import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen px-4 bg-gray-200 gap-2">
      <section className="form  w-1/2 h-full flex items-center justify-center">
        <section className="shadow-xl px-8 py-8 rounded-lg">
          <header>
            <h1 className="font-bold text-3xl text-center text-blue-800">
              Access Your Account
            </h1>
            <p className="text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
              neque?
            </p>
          </header>
          <form className="mt-4 flex justify-start items-center flex-col gap-2">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="font-bold">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="py-1 rounded-md border-black border-2 px-1 text-[0.9rem] text-blue-800"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="password" className="font-bold">
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                className="py-1 rounded-md border-black border-2 px-1 text-[0.9rem] text-blue-800"
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-800 w-1/2 py-1 mt-3 rounded-md hover:bg-blue-600 font-bold"
            >
              LogIn
            </button>
            <div className="text-end w-full px-6">
              <Link to="/signup" className="text-blue-800 text-2 underline">
                SigUp
              </Link>
            </div>
          </form>
        </section>
      </section>
    </div>
  );
};

export default Login;
