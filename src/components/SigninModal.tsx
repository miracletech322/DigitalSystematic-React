import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import request from "../axios";

const SigninModal = (props: any) => {
  if (!props.isOpen) return null;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!password) {
      toast.error("Password is required");
      return;
    }

    try {
      const res = await request({
        url: 'auth/signin',
        method: 'POST',
        data: {
          email, password
        }
      });
      if (res.data?.status == 'not_exist') {
        toast.warning("The user does not exist!");
      }
      else if (res.data?.status == 'wrong') {
        toast.error("The password is incorrect!");
      }
      else {
        localStorage.setItem("authToken", res.data?.token);
        localStorage.setItem("userData", JSON.stringify(res.data?.user))

        toast.success("Login successful!");
        props.setIsOpen(false)
      }
    } catch (error) {
      toast.error("Request Error");
    }
  }

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-[100]">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full m-5">
        <h2 className="text-xl font-semibold mb-4 text-center">Login to Digital Systematic</h2>
        <br />
        <div className="mb-4.5">
          <label className="mb-2.5 block text-black dark:text-white">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>

        <div>
          <label className="mb-2.5 block text-black dark:text-white">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>

        <div className="mt-5 mb-5.5 flex items-center justify-between">
          <label htmlFor="formCheckbox" className="flex cursor-pointer">
            <div className="relative pt-0.5">
              <input
                type="checkbox"
                id="formCheckbox"
                className="taskCheckbox sr-only"
              />
              <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark">
                <span className="text-white opacity-0">
                  <svg
                    className="fill-current"
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
                      fill=""
                    />
                  </svg>
                </span>
              </div>
            </div>
            <p>Remember me</p>
          </label>

          <Link to="#" className="text-sm text-primary hover:underline">
            Forget password?
          </Link>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
          &nbsp;
          <button
            onClick={() => props.setIsOpen(!props.isOpen)}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SigninModal;
