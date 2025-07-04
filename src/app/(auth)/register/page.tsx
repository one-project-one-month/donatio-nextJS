"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, FormEvent } from "react";
import { Eye, EyeClosed, Mail, User } from "lucide-react";
import API from "@/lib/api/axios";

interface FormState {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ErrorState {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Page: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] =
    useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isError, setIsError] = useState<ErrorState>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      if (form.password !== form.confirmPassword) {
        setIsError({
          username: "",
          email: "",
          password: "",
          confirmPassword: "Passwords do not match",
        });
        return;
      }

      const response = await API.post("/auth/registration/", form);

      setIsSubmitting(false);
      console.log(response);
    } catch (error: any) {
      const errorData = error.response?.data;
      setIsError(errorData);
      console.log(errorData);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="h-screen w-screen flex items-center justify-center">
      <div className="bg-blue-100 p-16 rounded-xl">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-xl font-bold">Create an account</h1>
          <p>Enter your email below to create your account</p>
        </div>
        <form className="space-y-4" onSubmit={handleForm}>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
            <Input
              type="text"
              placeholder="Name"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="pl-10 border-black"
            />
            {isError?.username && (
              <p className="text-red-500 text-sm">{isError.username}</p>
            )}
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black" />
            <Input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="pl-10 border-black"
            />
            {isError?.email && (
              <p className="text-red-500 text-sm">{isError.email}</p>
            )}
          </div>
          <div className="relative">
            {isShowPassword ? (
              <Eye
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black select-none cursor-pointer"
                onClick={() => setIsShowPassword(!isShowPassword)}
              />
            ) : (
              <EyeClosed
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black select-none cursor-pointer"
                onClick={() => setIsShowPassword(!isShowPassword)}
              />
            )}

            <Input
              type={isShowPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="pl-10 border-black"
            />
            {isError?.password && (
              <p className="text-red-500 text-sm">{isError.password}</p>
            )}
          </div>
          <div className="relative">
            {isShowConfirmPassword ? (
              <Eye
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black select-none cursor-pointer"
                onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              />
            ) : (
              <EyeClosed
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black select-none cursor-pointer"
                onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              />
            )}

            <Input
              type={isShowConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
              className="pl-10 border-black"
            />
            {isError?.confirmPassword && (
              <p className="text-red-500 text-sm">{isError.confirmPassword}</p>
            )}
          </div>
          <Button type="submit" className="w-full cursor-pointer">
            {isSubmitting ? "Wait Bro" : "Register"}
          </Button>
        </form>

        <div className="text-center mt-6">
          already have an account?{" "}
          <a href="/login" className="underline">
            login
          </a>
        </div>
      </div>
    </section>
  );
};

export default Page;
