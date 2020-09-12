import { FAKE_JOBS_LIST } from "../../../utils/constants";

export default (req, res) => {
  const {
    query: { id }
  } = req;
  try {
    const idAsNumber = Number(id);
    const jobById = FAKE_JOBS_LIST.find((job) => job.id === idAsNumber);
    if (jobById) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(jobById));
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          err: "Job not found"
        })
      );
    }
  } catch (err) {
    res.statusCode = 500;
    res.end("Something happened");
  }
};
