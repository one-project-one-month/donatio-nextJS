"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, FormEvent, useEffect } from "react";
import { Eye, EyeClosed, Mail } from "lucide-react";
import API from "@/lib/api/axios";
import { useRouter } from "next/navigation";

import image from "@/assets/image/authImage.png";
import googleLog from "@/assets/icons/google icon.svg";
import LogoName from "@/components/common/logo-name";
import { Label } from "@/components/ui/label";

import useAuthStore from "@/store/useAuthStore";

import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

interface FormState {
  username: string;
  password: string;
}

interface ErrorState {
  username: string;
  password: string;
}

const Page: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

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

      useAuthStore.getState().setAccessToken(access, refresh);

      setIsSubmitting(false);
      router.push("/donor/events");
    } catch (error: any) {
      const errorData = error.response?.data;
      setIsError(errorData);
      setIsSubmitting(false);
    }
  };

  const handleSuccess = async (credentialResponse: any) => {
    const credential = credentialResponse;

    const response = await API.post("/auth/google", {
      id_token: credential.credential,
    });

    const { access, refresh } = response.data;

    useAuthStore.getState().setAccessToken(access, refresh);

    router.push("/");
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

        <h1 className="text-2xl font-semibold my-6">Welcome back!</h1>

        <form className="space-y-4" onSubmit={handleForm}>
          <Label className="text-base font-medium mb-2">Username</Label>
          <div className="relative">
            <Input
              type="text"
              placeholder="Please enter your email address"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="border-[##E0E0E0] placeholder:text-[##E0E0E0] placeholder:text-xs md:placeholder:text-sm focus-visible:ring-blue-200"
            />
            {isError?.username && (
              <p className="text-red-500 text-sm">* {isError.username}</p>
            )}
          </div>

          <Label className="text-base font-medium mb-2">Password</Label>
          <div className="relative">
            <Input
              type={isShowPassword ? "text" : "password"}
              placeholder="Please enter your password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="border-[##E0E0E0] placeholder:text-[##E0E0E0] placeholder:text-xs md:placeholder:text-sm focus-visible:ring-blue-200"
            />
            {isShowPassword ? (
              <Eye
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black select-none cursor-pointer"
                onClick={() => setIsShowPassword(!isShowPassword)}
              />
            ) : (
              <EyeClosed
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black select-none cursor-pointer"
                onClick={() => setIsShowPassword(!isShowPassword)}
              />
            )}
            {isError?.password && (
              <p className="text-red-500 text-sm">{isError.password}</p>
            )}
          </div>

          <div className="h-36 flex flex-col justify-between relative mt-8">
            <Button
              type="submit"
              className="w-full cursor-pointer rounded-full py-6 bg-primary hover:bg-[#1797FF] active:bg-[#078CF9]"
            >
              {isSubmitting ? "Wait Bro" : "Login"}
            </Button>
            <div className="bg-white w-fit absolute px-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-gray-400">
              or
            </div>

            <hr />
            {isClient && (
              <GoogleOAuthProvider clientId="854666513086-ho6370cfgsg4b9045o9ml80e00kdb4qp.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={handleSuccess}
                  onError={() => console.log("Login Failed")}
                  useOneTap
                />
              </GoogleOAuthProvider>
            )}
          </div>
        </form>

        <div className="text-center mt-6">
          <span className="font-light">Don't have an account?</span>
          <a href="/register" className="text-primary ms-2 cursor-pointer">
            Sign Up
          </a>
        </div>
      </div>
    </section>
  );
};

export default Page;
