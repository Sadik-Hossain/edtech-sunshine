import React, { useState } from "react";
import { HiOutlineEye } from "react-icons/hi";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase.init";

const Register = () => {
  const [a, setA] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [createUserWithEmailAndPassword, user, loading, error] =
  //     useCreateUserWithEmailAndPassword(auth);

  //   if (error) {
  //     return (
  //       <div>
  //         <p>Error: {error.message}</p>
  //       </div>
  //     );
  //   }
  //   if (loading) {
  //     return <p>Loading...</p>;
  //   }
  //   if (user) {
  //     return (
  //       <div>
  //         <p>Registered User: {user.email}</p>
  //       </div>
  //     );
  //   }
  return (
    <div>
      <h1>Register</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="w-1/4 mx-auto rounded-2xl border border-slate-500 p-4 mt-6"
      >
        <input
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="text"
          placeholder="enter Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.Email && <p>invalid email</p>}
        <div className="w-full bg-white flex items-center border rounded  my-4 focus-within:border-indigo-500 justify-between focus-within:ring-2 focus-within:ring-indigo-200 transition-colors duration-200 ease-in-out">
          <input
            className="text-base px-4 py-3 flex-1 focus:outline-none"
            type={a ? "text" : "password"}
            placeholder="enter password"
            {...register("password", { required: true, min: 8 })}
          />
          <HiOutlineEye onClick={() => setA(!a)} className="flex-end mx-2" />
        </div>
        <input
          type="submit"
          className="w-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        />
      </form>
    </div>
  );
};

export default Register;
