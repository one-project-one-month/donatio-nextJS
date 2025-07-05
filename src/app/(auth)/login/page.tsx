"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, FormEvent } from "react";
import { Eye, EyeClosed, User } from "lucide-react";
import API from "@/lib/api/axios";
import { useRouter } from "next/navigation";

import image from "@/assets/image/authImage.png";

interface FormState {
  username: string;
  password: string;
}

interface ErrorState {
  username: string;
  password: string;
}

const Page: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    username: "",
    password: "",
  });

  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isError, setIsError] = useState<ErrorState>({
    username: "",
    password: "",
  });

  const router = useRouter();

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const response = await API.post("/auth/login/", form);

      const { access, refresh } = response.data;

      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);

      console.log("Login success:", response.data);
      setIsSubmitting(false);
      router.push("/");
    } catch (error: any) {
      const errorData = error.response?.data;
      setIsError(errorData);
      console.log(errorData);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="h-screen w-screen flex items-center justify-center relative">
      <img
        src={image.src}
        alt="authImage"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="bg-blue-100 p-16 rounded-xl">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-xl font-bold">Login to your account</h1>
          <p>Enter your email below to login your account</p>
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
            {!isError?.username && (
              <p className="text-red-500 text-sm">{isError.username}</p>
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

          <Button type="submit" className="w-full cursor-pointer">
            {isSubmitting ? "Wait Bro" : "Login"}
          </Button>
        </form>

        <div className="text-center mt-6">
          don't have an account?{" "}
          <a href="/register" className="underline">
            register
          </a>
        </div>
      </div>
    </section>
  );
};

export default Page;
