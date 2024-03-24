import PropTypes from "prop-types";
import ButtonOutline from "./ButtonOutline";
import { Link } from "react-router-dom";
import Button from "./Button";
const AppliedItem = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    job_type,
    remote_or_onsite,
    location,
    salary,
    id,
  } = job;
  return (
    <div className="flex  justify-between items-center p-4 border mt-3 rounded-md">
      <div className="flex items-center gap-5">
        <div className="bg-[#F4F4F4] w-[240px] h-[240px] grid place-items-center">
          <img src={logo} alt={job_title} />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">{job_title}</h3>
          <p className="text-gray-500">{company_name}</p>
          <div className="space-x-5">
            <ButtonOutline name={remote_or_onsite}></ButtonOutline>
            <ButtonOutline name={job_type}></ButtonOutline>
          </div>
          <div>
            <p className="text-gray-500">{location}</p>
            <p className="text-gray-500">{salary}</p>
          </div>
        </div>
      </div>
      <Link to={`/jobes/${id}`}>
        <Button name="View Details"></Button>
      </Link>
    </div>
  );
};
AppliedItem.propTypes = {
  job: PropTypes.object,
};
export default AppliedItem;
