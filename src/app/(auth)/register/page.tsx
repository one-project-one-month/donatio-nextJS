"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, FormEvent } from "react";
import { Eye, EyeClosed } from "lucide-react";
import API from "@/lib/api/axios";
import { useRouter } from "next/navigation";

import image from "@/assets/image/authImage.png";
import googleLog from "@/assets/icons/google icon.svg";
import LogoName from "@/components/common/logo-name";
import { Label } from "@/components/ui/label";

import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

interface FormState {
  username: string;
  email: string;
  password1: string;
  password2: string;
}

interface ErrorState {
  username: string;
  email: string;
  password1: string;
  password2: string;
  non_field_errors: string;
}

const Page: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState<ErrorState>({
    username: "",
    email: "",
    password1: "",
    password2: "",
    non_field_errors: "",
  });

  const router = useRouter();

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.password1 !== form.password2) {
      setIsError((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match",
      }));
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await API.post("/auth/registration/", form);

      console.log("Register success:", response.data);
      setIsSubmitting(false);
      router.push("/login");
    } catch (error: any) {
      const errorData = error.response?.data || {};
      setIsError(errorData);
      console.error(errorData);
      setIsSubmitting(false);
    }
  };

  const handleSuccess = async (credentialResponse: any) => {
    const credential = credentialResponse;

    console.log(credential.credential);

    const response = await axios.post("http://localhost:8000/api/auth/google", {
      id_token: credential.credential,
    });

    console.log(response.data);
  };

  return (
    <section className="h-screen w-screen flex items-center justify-center relative">
      <img
        src={image.src}
        alt="authImage"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="bg-white p-10 rounded-xl z-10 max-w-lg md:w-md xl:w-lg">
        <div className="flex">
          <LogoName />
        </div>

        <div className="my-6">
          <h1 className="text-2xl font-semibold">Create your account</h1>
          {isError.non_field_errors && (
            <p className="text-red-500 text-sm">* {isError.non_field_errors}</p>
          )}
        </div>

        <form className="space-y-4" onSubmit={handleForm}>
          {/* Name */}
          <Label className="text-base font-medium mb-2">Full Name</Label>
          <div className="relative">
            <Input
              type="text"
              placeholder="Enter your full name"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="border-[##E0E0E0] placeholder:text-[##E0E0E0] placeholder:text-xs md:placeholder:text-sm focus-visible:ring-blue-200"
            />
            {isError.username && (
              <p className="text-red-500 text-sm">* {isError.username}</p>
            )}
          </div>

          {/* Email */}
          <Label className="text-base font-medium mb-2">Email Address</Label>
          <div className="relative">
            <Input
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border-[##E0E0E0] placeholder:text-[##E0E0E0] placeholder:text-xs md:placeholder:text-sm focus-visible:ring-blue-200"
            />
            {isError.email && (
              <p className="text-red-500 text-sm">* {isError.email}</p>
            )}
          </div>

          {/* Password */}
          <Label className="text-base font-medium mb-2">Password</Label>
          <div className="relative">
            <Input
              type={isShowPassword ? "text" : "password"}
              placeholder="Create a password"
              value={form.password1}
              onChange={(e) => setForm({ ...form, password1: e.target.value })}
              className="border-[##E0E0E0] placeholder:text-[##E0E0E0] placeholder:text-xs md:placeholder:text-sm focus-visible:ring-blue-200"
            />
            {isShowPassword ? (
              <Eye
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black cursor-pointer"
                onClick={() => setIsShowPassword(!isShowPassword)}
              />
            ) : (
              <EyeClosed
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black cursor-pointer"
                onClick={() => setIsShowPassword(!isShowPassword)}
              />
            )}
            {isError.password1 && (
              <p className="text-red-500 text-sm">{isError.password1}</p>
            )}
          </div>

          {/* Confirm Password */}
          <Label className="text-base font-medium mb-2">Confirm Password</Label>
          <div className="relative">
            <Input
              type={isShowConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              value={form.password2}
              onChange={(e) => setForm({ ...form, password2: e.target.value })}
              className="border-[##E0E0E0] placeholder:text-[##E0E0E0] placeholder:text-xs md:placeholder:text-sm focus-visible:ring-blue-200"
            />
            {isShowConfirmPassword ? (
              <Eye
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black cursor-pointer"
                onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              />
            ) : (
              <EyeClosed
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black cursor-pointer"
                onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              />
            )}
            {isError.password2 && (
              <p className="text-red-500 text-sm">{isError.password2}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="h-36 flex flex-col justify-between relative mt-8">
            <Button
              type="submit"
              className="w-full cursor-pointer rounded-full py-6 bg-primary hover:bg-[#1797FF] active:bg-[#078CF9]"
            >
              {isSubmitting ? "Creating..." : "Sign Up"}
            </Button>

            <div className="bg-white w-fit absolute px-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-gray-400">
              or
            </div>

            <hr />
            {/* <button className="w-full flex items-center justify-center gap-2 cursor-pointer rounded-full py-3 text-primary border border-primary text-base hover:bg-[#F2F2F2] active:bg-[#F1F1F1]">
              <img src={googleLog.src} alt="Google Icon" className="h-5 w-5" />
              Continue With Google
            </button> */}
            <GoogleOAuthProvider clientId="854666513086-ho6370cfgsg4b9045o9ml80e00kdb4qp.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={handleSuccess}
                onError={() => console.log("Login Failed")}
                useOneTap
              />
            </GoogleOAuthProvider>
          </div>
        </form>

        <div className="text-center mt-6">
          <span className="font-light">Already have an account?</span>
          <a href="/login" className="text-primary ms-2 cursor-pointer">
            Login
          </a>
        </div>
      </div>
    </section>
  );
};

export default Page;
