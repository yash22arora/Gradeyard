import InputContainer from "~/components/auth/InputContainer";
import Button from "~/components/common/Button";
import Divider from "~/components/common/Divider";
import GoogleButton from "~/components/common/GoogleButton";
import Input from "~/components/common/Input";

const SignupIndex: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl self-start mb-6">Let's set you up...</h1>
      <GoogleButton />
      <Divider label="Or" />
      <InputContainer>
        <Input variant="secondary" label="Email" />
      </InputContainer>
      <Button
        onClick={() => {
          window.location.href = "/auth/signup/2";
        }}
      >
        Next
      </Button>
      <span className="text-primary.light text-sm font-light my-2">
        Forgot your password?
      </span>
    </>
  );
};

export default SignupIndex;
