const mongoose = require("mongoose");
const express = require("express");
const JobModel = require("./models/JobModel");
const { formatJob } = require("./format");
const { celebrate, Joi, errors, Segments } = require("celebrate");
const { auth } = require("express-oauth2-jwt-bearer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const acceptedJobStatuses = [
  "Pending",
  "Active",
  "Completed",
  "Invoiced",
  "Cancelled",
  "To Price",
];

const checkJwt = auth({
  audience: "https://strongfencing.com",
  issuerBaseURL: `https://dev-qqar3eez.us.auth0.com/`,
});

app.post(
  "/jobs",
  checkJwt,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      clientName: Joi.string().required(),
      location: Joi.string().required(),
      description: Joi.string().required(),
      created_at: Joi.date(),
      clientPhoneNumber: Joi.number().required(),
      jobStatus: Joi.string().required(),
      jobNotes: Joi.string().required(),
      jobDate: Joi.date().required(),
      userId: Joi.string(),
    }),
  }),
  async (req, res, next) => {
    const { body } = req;
    const jobStatus = req.body.jobStatus;
    const jobBody = {
      userId: req.auth.payload.sub,
      ...body,
    };
    try {
       if (acceptedJobStatuses.includes(jobStatus)) {
        const job = await JobModel.create(jobBody);
        res.send(formatJob(job)).status(201);
       } else {
        res.status(400).send("Invalid job status");
       }
      
    } catch (error) {
      next(error);
    }
  }
);

//
//
app.patch("/jobs/:id", checkJwt, async (request, response, next) => {
  try {
    const { id } = request.params;
    const updates = request.body;
    const options = { new: true };

    const job = await JobModel.findByIdAndUpdate(id, updates, options);
    response.send(formatJob(job)).status(200);
  } catch (error) {
    next(error);
  }
});
//
//

app.get("/jobs", async (req, res, next) => {

  try {
    const jobs = await JobModel.find({});
    res.send(jobs.map(formatJob)).status(200);
  } catch (error) {
    next(error);
  }
});

app.get("/jobs/:id", checkJwt, async (req, res, next) => {
  const { id } = req.params;
  
  console.log(id);
  const user = req.auth.payload.sub
  console.log(user);

  try {
    if (mongoose.Types.ObjectId.isValid(id) === true) {
      const job = await JobModel.findById(id);
      console.log(job);
      if (job !== null) {
        if (!job.userId) {
          return res.status(401).json({error: "Unauthorized"});
        }

        if (job.userId === user) {
          return res.send(formatJob(job)).status(200);
        } else {
          return res.status(403).json({error: "You are not authorized to view this job"});
        }

      } else {
        return res.status(404).json({error: "Job not found"});
      }
    } else {
      return res.status(400).json({error: "Invalid ID"});
    }
  } catch (error) {
    next(error);
  }
});



app.use(errors());
module.exports = app;
