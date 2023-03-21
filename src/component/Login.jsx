import React from 'react';

function Login() {
    return (
        <div className="flex h-screen bg-gray-200">
            <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-800 to-indigo-600">
                <form className="m-5 w-10/12">
                    <h1 className="w-full text-4xl tracking-widest my-6">Login</h1>
                    <div className="w-full my-6">
                        <input
                            className="p-2 rounded-md border-none w-full text-black"
                            type="text"
                            placeholder="Email"
                            name="email"
                            required
                        />
                    </div>
                    <div className="w-full my-6">
                        <input
                            className="p-2 rounded-md border-none w-full text-black"
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                        />
                    </div>
                    <div className="w-full my-10">
                        <button
                            type="submit"
                            className="p-2 rounded-md bg-gradient-to-tr from-yellow-500 to-yellow-600 text-white w-full"
                            >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
