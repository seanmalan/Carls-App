const formatJob = (job) => {
  return {
    id: job._id,
    title: job.title,
    clientName: job.clientName,
    location: job.location,
    description: job.description,
    created_at: job.created_at,
    clientPhoneNumber: job.clientPhoneNumber,
    jobStatus: job.jobStatus,
    userId: job.createdBy,
    jobDate: job.jobDate,
    
  };
}

module.exports = {formatJob}