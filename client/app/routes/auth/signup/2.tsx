import InputContainer from "~/components/auth/InputContainer";
import Button from "~/components/common/Button";
import Input from "~/components/common/Input";

const Signup2: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl self-start mb-6">Create a password</h1>
      <InputContainer>
        <Input variant="secondary" label="Email" disabled value={""} />
        <Input variant="secondary" label="Password" type="password" />
      </InputContainer>
      <Button
        onClick={() => {
          window.location.href = "/auth/signup/3";
        }}
      >
        Next
      </Button>
    </>
  );
};

export default Signup2;
