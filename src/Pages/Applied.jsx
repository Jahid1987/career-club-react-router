import { useLoaderData } from "react-router-dom";
import { getItem } from "../localStorage/localStorage";
import AppliedItem from "../Components/AppliedItem";

export async function loader() {
  const response = await fetch("../jobs.json");
  const data = await response.json();
  const appliedItems = await getItem("appliedJobs");
  const docs = await data.filter((doc) => appliedItems.includes(doc.id));
  return { docs };
}

const Applied = () => {
  const { docs } = useLoaderData();
  return (
    <div className="mb-10">
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)",
        }}
        className=" text-center py-10 text-3xl font-bold"
      >
        Applied Jobs
      </div>
      <div className="px-3">
        {docs.map((doc) => (
          <AppliedItem key={doc.id} job={doc}></AppliedItem>
        ))}
      </div>
    </div>
  );
};

export default Applied;
