import React, { useState } from "react";
import logo from "../assets/logo-parser.svg";
import { Link } from "react-router-dom";
export default function Singup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className=" min-h-screen flex flex-col">
      <div className="container  max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full bg-gray-100 mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <img classNameName="mx-auto h-20 " src={logo} alt="ParserIO" />
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <div>
            <label
              htmlFor="name"
              classNameName="block text-sm font-medium leading-6 text-gray-700 text-left"
            >
              Full Name
            </label>
            <div classNameName="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                classNameName=" px-2
                  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              classNameName="block text-sm font-medium leading-6 text-gray-700 text-left"
            >
              Email address
            </label>
            <div classNameName="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                classNameName="
                  px-2
                  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div classNameName="flex items-center justify-between">
              <label
                htmlFor="password"
                classNameName="block text-sm font-medium leading-6 text-gray-700"
              >
                Password
              </label>
            </div>
            <div classNameName="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                classNameName="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div classNameName="flex items-center justify-between">
              <label
                htmlFor="confirm-password"
                classNameName="block text-sm font-medium leading-6 text-gray-700"
              >
                Confirm Password
              </label>
            </div>
            <div classNameName="mt-2">
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="current-password"
                required
                classNameName="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Create Account
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              {" "}
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              {" "}
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?{" "}
          <Link
            className="no-underline border-b border-blue text-blue"
            to="../login"
          >
            Log in
          </Link>
        </div>
      </div>
      <div classNameName="h-96 w-96 bg-blue-700"></div>
    </div>
  );
}
