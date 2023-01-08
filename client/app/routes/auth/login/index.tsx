import Button from "~/components/common/Button";
import GoogleButton from "~/components/common/GoogleButton";

const Login: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-white flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-2/5 min-w-[400px]">
        <GoogleButton />
        <Button>Sign in</Button>
      </div>
    </div>
  );
};

export default Login;