import React from 'react';

const Login = () => {
  return (
    <div class="py-10 lg:py-52 bg-base-200">
      <div class="flex flex-col lg:flex-row justify-center items-center px-4 lg:px-36">
        <div class="w-full lg:w-1/2 px-4">
          <h1 class="text-5xl font-bold">SignIn now!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div class="shadow-2xl bg-base-100 w-full lg:w-1/2 rounded-md">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
            </div>
            <div class="form-control mt-6">
              <button
                class="btn"
                style={{ background: '#ff4f5a', border: 'none' }}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
