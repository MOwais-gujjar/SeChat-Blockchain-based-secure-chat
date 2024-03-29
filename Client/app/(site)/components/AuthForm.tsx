"use client";

import axios from "axios";
import Button from "../../components/Button";
import Input from "../../components/Input/Input";
import { useCallback, useEffect, useState } from "react";
import {
  FormState,
  useForm,
  FieldValues,
  SubmitHandler,
} from "react-hook-form";
import {BsGithub, BsGoogle} from 'react-icons/bs'
import AuthSocialButton from "./AuthSocialButton";
import toast from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    if(session?.status === 'authenticated'){
        router.push('conversations');
        }
  }, [session?.status, router])

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
// Register
    if (variant === "REGISTER") {
      axios.post('/api/register', data)
      .then(()=> signIn('credentials', data)
      )
      .catch(() => toast.error('Something went wrong') )
      .finally(() => setIsLoading(false));
    }
    // Login
    if (variant === "LOGIN") {
      signIn('credentials', {
        ...data,
        redirect: false
      })
      .then((callback) => {
        if(callback?.error){
          toast.error('Invalid Credentials');
        }
        if(callback?.ok && !callback?.error){
          toast.success('Loged In!');
          router.push('conversations')
        }
      })
      .finally(()=> setIsLoading(false));
    }
  };

  // Social Actions
  const socialAction = (action: string) => {
    setIsLoading(true);
    signIn(action, {
      redirect: false
    })
    .then((callback) => {
      if(callback?.error){
        toast.error('Invalid Credentials');
      }
      if(callback?.ok && !callback?.error){
        toast.success('Loged In!');
        router.push('conversations')
      }
    })
    .finally(()=> setIsLoading(false));
  }
  
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
              Disabled={isLoading}
            />
          )}
          <Input
            id="email"
            label="Email"
            type="email"
            register={register}
            errors={errors}
            Disabled={isLoading}
          />
          <Input
            id="password"
            label="password"
            type="password"
            register={register}
            errors={errors}
            Disabled={isLoading}
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
