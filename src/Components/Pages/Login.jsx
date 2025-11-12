import React, { useContext } from 'react';
import { Context } from '../../Context/UserContext';

export default function Login() {
  const { login, Session } = useContext(Context);

  function handler(e) {
    e.preventDefault();
    const userName = e.target.elements.username.value;
    const passWord = e.target.elements.password.value;
    login(userName, passWord);
  }

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handler}
        className="space-y-6 bg-white shadow-2xl p-8 rounded-xl w-full max-w-md"
      >
        <h2 className="font-bold text-slate-800 text-2xl text-center">ورود به حساب کاربری</h2>

        <div className="flex flex-col space-y-2">
          <label htmlFor="username" className="font-medium text-slate-700">
            نام کاربری
          </label>
          <input
            name="username"
            type="text"
            placeholder="نام کاربری"
            className="bg-slate-100 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-slate-800"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="password" className="font-medium text-slate-700">
            رمز عبور
          </label>
          <input
            name="password"
            type="password"
            placeholder="رمز عبور"
            className="bg-slate-100 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-slate-800"
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 py-2 rounded-lg w-full font-semibold text-white transition duration-300 cursor-pointer"
        >
          ورود
        </button>
      </form>
    </div>
  );
}