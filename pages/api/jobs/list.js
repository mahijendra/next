import { FAKE_JOBS_LIST } from "../../../utils/constants";

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(FAKE_JOBS_LIST));
};
