const { formatJob } = require('./format');
 
const job = {
  _id: "123",
  title: "title",
  clientName: "clientName",
  location: "location",
  description: "description",
  created_at: "created_at",
  clientPhoneNumber: "clientPhoneNumber",
  jobStatus: "jobStatus",
  jobDate: "jobDate",
  userId: "userId",
};

describe("formatJob", () => {
  it("should return a formatted job", () => {
    const formattedJob = formatJob(job);
    expect(formattedJob).toEqual({
      id: "123",
      title: "title",
      clientName: "clientName",
      location: "location",
      description: "description",
      created_at: "created_at",
      clientPhoneNumber: "clientPhoneNumber",
      jobStatus: "jobStatus",
      jobDate: "jobDate",
      userId: "userId",
    });
  });
});
