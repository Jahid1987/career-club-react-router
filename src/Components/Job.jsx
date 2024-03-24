import PropTypes from "prop-types";
import ButtonOutline from "./ButtonOutline";
import Button from "./Button";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    id,
  } = job;
  return (
    <div className="border bg-white p-10 rounded-lg">
      <img src={logo} alt={job_title} />
      <h3>{job_title}</h3>
      <p>{company_name}</p>
      <div className="space-x-5">
        <ButtonOutline name={remote_or_onsite}></ButtonOutline>
        <ButtonOutline name={job_type}></ButtonOutline>
      </div>
      <div>
        <p>{location}</p>
        <p>{salary}</p>
      </div>
      <Link to={`/jobes/${id}`}>
        <Button name="View Details"></Button>
      </Link>
    </div>
  );
};
Job.propTypes = {
  job: PropTypes.object,
};
export default Job;
