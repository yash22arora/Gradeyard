import Input from "~/components/common/Input";
import Label from "~/components/common/Label/Label";
import Slate from "~/components/common/Slate/Slate";
import Title from "~/components/common/Title/Title";

const CreateIndex: React.FC = () => {
  return (
    <div>
      <Title size="h1">Create a marksheet</Title>
      <div className="flex flex-row justify-between items-start mt-6">
        <Slate className=" w-2/3 mr-8 h-screen">
          <div className="flex flex-col items-start px-8 py-8">
            <Label htmlFor="marksheet_name">Name your marksheet</Label>
            <Input id="marksheet_name" />
          </div>
        </Slate>
        <Slate className="w-1/3 ml-8 h-48 sticky top-16"></Slate>
      </div>
    </div>
  );
};

export default CreateIndex;
