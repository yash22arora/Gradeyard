import InputContainer from "~/components/auth/InputContainer";
import Button from "~/components/common/Button";
import Divider from "~/components/common/Divider";
import GoogleButton from "~/components/common/GoogleButton";
import Input from "~/components/common/Input";

const Login: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-white flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-1/3 min-w-[400px]">
        <GoogleButton />
        <Divider label="Or" />
        <InputContainer>
          <Input label="Username or Email" />
          <Input label="password" type={"password"} />
        </InputContainer>
        <Button>Sign in</Button>
        <span className="text-primary.light text-sm font-light my-2">
          Forgot your password?
        </span>
        <span className="text-on-background.light mt-6 tracking-wide">
          Don't have an account? Create one{" "}
          <a className="text-primary.light" href="/auth/register">
            here
          </a>
        </span>
      </div>
    </div>
  );
};

export default Login;
