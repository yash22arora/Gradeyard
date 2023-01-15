import List from "~/components/common/List/List";
import Title from "~/components/common/Title/Title";

const dummyData = [
  {
    id: 1,
    orderId: "1.",
    name: "Digital Village Hackathon",
    status: "Active",
  },
  {
    id: 2,
    orderId: "2.",
    name: "Hack the Mountains",
    status: "Compiled",
  },
  {
    id: 3,
    orderId: "3.",
    name: "HackOwasp 4.0",
    status: "Compiled",
  },
  {
    id: 4,
    orderId: "4.",
    name: "Makethon 4.0",
    status: "Compiled",
  },
  {
    id: 5,
    orderId: "5.",
    name: "MUJ Designathon",
    status: "Compiled",
  },
  {
    id: 6,
    orderId: "6.",
    name: "Hackowasp 3.0",
    status: "Compiled",
  },
  {
    id: 7,
    orderId: "7.",
    name: "Hackowasp 2.0",
    status: "Compiled",
  },
];

const dummyHeaderFields = [
  {
    name: "orderId",
    label: "#",
  },
  {
    name: "name",
    label: "Marksheet",
  },
  {
    name: "status",
    label: "Status",
  },
];

const MarksheetsIndex: React.FC = () => {
  return (
    <div>
      <Title size="h1">Your Marksheets</Title>
      <List headerFields={dummyHeaderFields} data={dummyData} />
    </div>
  );
};

export default MarksheetsIndex;
