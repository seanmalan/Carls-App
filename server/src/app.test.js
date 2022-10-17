const request = require('supertest');
const app = require('./app');

describe('GET /jobs', () => {
  test('should return 200 OK', async () => {

    const expectedBody = [
      {
        "_id": "61679189b54f48aa6588a7fd",
        "job": "Build a fence",
        "clientName": "Joe Blogg",
        "clientPhoneNumber": "021345456",
        "jobAddress": "123 Fake street",
        "description": "Build a fence and replace the retaining wall as it is falling apart",
        "jobStatus": "boomerang",
        "jobNotes": [
          "We need to dig back 0.5 meters into the slope",
          "we need to dig 3m to either side of the fence to relieve pressure."
        ]
      },
      {
        "_id": "630c5aadd51c5dc2b4b1bfed",
        "job": "Build a deck",
        "clientName": "Joe Blogg",
        "clientPhoneNumber": "21345456",
        "jobAddress": "123 Fake street",
        "description": "Build a fence and replace the retaining wall as it is falling apart",
        "jobStatus": "scheduled",
        "jobNotes": "we need a deck that is 100mm high",
        "createdDate": "2023-11-17T00:00:00.000Z",
        "__v": 0
      },
      {
        "_id": "630d92006d4243bc6631592e",
        "job": "Build a trellis",
        "clientName": "Joe Blogg",
        "clientPhoneNumber": "21345456",
        "jobAddress": "123 Fake street",
        "description": "Build a fence and replace the retaining wall as it is falling apart",
        "jobStatus": "active",
        "jobNotes": [
          "we need a new trellis"
        ],
        "__v": 0
      },
      {
        "_id": "630d92696d4243bc66315930",
        "job": "Build a trellis",
        "clientName": "Joe Blogg",
        "clientPhoneNumber": "21345456",
        "jobAddress": "123 Fake street",
        "description": "Build a fence and replace the retaining wall as it is falling apart",
        "jobStatus": "active",
        "jobNotes": [
          "This is a sample note"
        ],
        "__v": 0
      },
      {
        "_id": "630d95d6400359b9b224a40a",
        "job": "Build a trellis",
        "clientName": "Joe Blogg",
        "clientPhoneNumber": "21345456",
        "jobAddress": "123 Fake street",
        "description": "Build a fence and replace the retaining wall as it is falling apart",
        "jobStatus": "active",
        "jobNotes": [
          "This is a sample note"
        ],
        "__v": 0
      }
    ]

    const expectedStatus = 200

    await request(app)
      .get('/jobs')
      .expect(expectedStatus)
      .expect((res) => {
        expect(res.body).toContain(expectedBody);
      });
  });
});


