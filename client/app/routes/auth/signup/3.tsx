import InputContainer from "~/components/auth/InputContainer";
import Button from "~/components/common/Button";
import Input from "~/components/common/Input";

const Signup3: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl self-start mb-6">What should we call you?</h1>
      <InputContainer>
        <Input label="First Name" />
        <Input label="Last Name" />
      </InputContainer>
      <Button>Create Account</Button>
    </>
  );
};

export default Signup3;
