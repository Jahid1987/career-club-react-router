import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import Job from "./Job";
import Button from "./Button";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  function handleClick() {
    setDataLength(jobs.length);
  }
  return (
    <div>
      <SectionTitle
        title="Featured Jobs"
        text="Explore thousands of job opportunities with all the information you need. Its your future"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4 px-3">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div
        className={`flex justify-center mt-10 ${
          dataLength === jobs.length && "hidden"
        }`}
      >
        <Button handleClick={handleClick} name="See All Jobs"></Button>
      </div>
    </div>
  );
};

export default Jobs;
