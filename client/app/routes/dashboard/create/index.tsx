import Button from "~/components/common/Button";
import Divider from "~/components/common/Divider";
import Input from "~/components/common/Input";
import Label from "~/components/common/Label/Label";
import Slate from "~/components/common/Slate/Slate";
import Title from "~/components/common/Title/Title";
import FieldsList from "~/components/create/FieldsList";

const CreateIndex: React.FC = () => {
  return (
    <div>
      <Title size="h1">Create a marksheet</Title>
      <div className="flex flex-row justify-between items-start mt-6">
        <Slate className=" w-2/3 mr-8">
          <div className="flex flex-col items-start px-8 py-8">
            <Label htmlFor="marksheet_name">Name your marksheet</Label>
            <Input id="marksheet_name" />
            <Label className="mt-8">Describe marking fields</Label>
            <FieldsList />
            <Label className="mt-8">Add Teams</Label>
            <span className="text-sm text-on-surface-variant.light mt-4 font-light">
              You can either upload a CSV downloaded from Devfolio or can
              manually add teams.
            </span>
            <div className="w-full h-24 border border-dashed border-outline.light bg-slate-100 bg-opacity-50 my-4"></div>
            <Divider label="OR" className="mx-0 opacity-50" />
            <Label className="mt-8">Invite Judges</Label>
            <Input placeholder="judge1@xyz.com, judge2@abc.in ..." />
            <div className="flec flex-row items-center justify-start w-full mt-4 text-outline.light">
              <input type={"checkbox"} id="send-mails-judges" />
              <span className="text-sm leading-none ml-2 relative bottom-[1px]">
                <label htmlFor="send-mails-judges">
                  Send mails to judges inviting to the marksheet
                </label>
              </span>
            </div>
            <Button className="mx-0 mt-12">Create Marksheet</Button>
          </div>
        </Slate>
        <Slate className="w-1/3 ml-8 h-48 sticky top-16"></Slate>
      </div>
    </div>
  );
};

export default CreateIndex;
