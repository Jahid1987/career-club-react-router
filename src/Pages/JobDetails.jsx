import { useLoaderData } from "react-router-dom";
import Paragraph from "../Components/Paragraph";
import Button from "../Components/Button";

export async function loader({ params }) {
  const response = await fetch("../jobs.json");
  const data = await response.json();
  const singleData = data.find((item) => item.id === parseInt(params.jobId));
  return { singleData };
}

const JobDetails = () => {
  const { singleData } = useLoaderData();
  const {
    job_title,
    salary,
    job_description,
    experiences,
    educational_requirements,
    job_responsibility,
    contact_information,
    id,
  } = singleData;

  function handleApply() {
    console.log(id);
  }
  return (
    <div className="mb-10">
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)",
        }}
        className=" text-center py-10 text-3xl font-bold"
      >
        Job Details
      </div>
      <div className="flex flex-col lg:flex-row gap-3 mt-5">
        <div>
          <Paragraph name="Job Description">{job_description}</Paragraph>
          <Paragraph name="Job Responsibility">{job_responsibility}</Paragraph>
          <Paragraph name="Educational Requirements">
            {educational_requirements}
          </Paragraph>
          <Paragraph name="Experience">{experiences}</Paragraph>
          <br />
          <br />
          <Button handleClick={handleApply} name="Apply Now"></Button>
        </div>
        <div
          style={{
            borderRadius: "8px",
            background:
              "linear-gradient(90deg, rgba(126, 144, 254, 0.10) 0%, rgba(152, 115, 255, 0.10) 100%)",
          }}
          className="max-w-[425px] w-full p-5"
        >
          <Paragraph name="Job Details" />
          <div className="divider"></div>
          <Paragraph name="Salary">{salary}</Paragraph>
          <Paragraph name="Job Title">{job_title}</Paragraph>
          <br />
          <Paragraph name="Contact Information" />
          <div className="divider"></div>
          <Paragraph name="Phone">{contact_information.phone}</Paragraph>
          <Paragraph name="Email">{contact_information.email}</Paragraph>
          <Paragraph name="Address">{contact_information.address}</Paragraph>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
