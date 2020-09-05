import React from "react";
import axios from "axios";
import "./login.css";

// Importing componenets
import FacebookLogin from "./facebook";

const Login = ({ setLogin }) => {
  const submission = () => {
    axios({
      method: "post",
      url: "https://reqres.in/api/users",
      data: {
        email: document.getElementById("email").value,
        password: document.getElementById("pass").value,
      },
    }).then(
      (response) => {
        console.log(response);
        alert(`${response.data.email} has been registered`);
        setLogin(true);
      },
      (error) => {
        alert(error);
      }
    );
  };

  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div class="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Sign up</h1>
          <h2 class="mb-8 text-2xl text-center">Create your Account</h2>
          <h3 class="mb-8 text-1x1 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div class="text-center">
            <FacebookLogin setLogin={setLogin} />
          </div>
          <hr class="hr-text" data-content="OR" />
          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
            required
          />
          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            id="email"
            required
          />
          <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            id="pass"
            placeholder="Password"
            required
          />
          <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
            required
          />

          <div class="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the{" "}
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="google.com"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="google.com"
            >
              Privacy Policy
            </a>{" "}
          </div>

          <button
            id="submit"
            type="submit"
            onClick={submission}
            class=" w-full py-3 rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
