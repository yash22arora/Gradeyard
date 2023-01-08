import { FcGoogle } from "react-icons/fc";
const GoogleButton: React.FC = () => {
  return (
    <button className="bg-tertiary-container.light m-2 my-4 flex flex-row items-center justify-center rounded-sm p-2 w-full text-center text-on-tertiary-container.light text-xl font-medium">
      <span className="mr-2">
        <FcGoogle size={24} />
      </span>
      Sign in with Google
    </button>
  );
};

export default GoogleButton;
