"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input/Input";
import { useCallback, useState } from "react";
import {
  FormState,
  useForm,
  FieldValues,
  SubmitHandler,
} from "react-hook-form";
import {BsGithub, BsGoogle} from 'react-icons/bs'
import AuthSocialButton from "./AuthSocialButton";
import AuthMetaMaskButton from "./AuthMetaMaskButton";

type Variant = "LOGIN" | "REGISTER";
const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      //axios Register
    }
    if (variant === "LOGIN") {
      //NEXTAUTH SignIn
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
  };
  return (
    <div className=" mt-4 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 mx-2 py-8 shadow sm:rounded-lg sm:px-10 ">
        <form className=" space-y-5" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              id="name"
              label="Name"
              type="text"
              register={register}
              errors={errors}
            />
          )}
          <Input
            id="email"
            label="Email"
            type="email"
            register={register}
            errors={errors}
          />
          <Input
            id="password"
            label="password"
            type="password"
            register={register}
            errors={errors}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === "LOGIN" ? "Sign In" : "Register"}
            </Button>
          </div>
        </form>
        <div className="mt-4">
          <div className=" relative">
            <div
              className=" 
            absolute 
            inset-0 
            flex 
            items-center"
            >
              <div
                className="
                w-full 
                border-t 
               border-gray-300
            "
              />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className=" bg-white px-2 text-gray-500">
                or continue with
              </span>
            </div>
          </div>
          <div className=" mt-4 flex gap-2">
            <AuthSocialButton
                icon={BsGithub}
                onClick={ ()=> socialAction('github')}
            />
            <AuthSocialButton
                icon={BsGoogle}
                onClick={ ()=> socialAction('google')}
            />
            <AuthMetaMaskButton />
          </div>
          <div className="
              flex
              gap-2
              justify-center
              text-sm
              mt-4
              px-2
              text-gray-500
            ">
              <div>
                {variant === 'LOGIN' ? 'New to Sechat' : 'Already have an Account'}
              </div>
              <div className="
                  underline cursor-pointer"
                  onClick={toggleVariant}
              >
                {
                  variant === 'LOGIN' ? 'Create an Account' : 'Login'
                }
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
