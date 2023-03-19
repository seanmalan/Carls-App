BEGIN TRANSACTION

CREATE TABLE jobs (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    clientName TEXT NOT NULL,
    location TEXT NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    clientPhoneNumber TEXT NOT NULL,
    jobStatus TEXT NOT NULL,
    userId INTEGER NOT NULL,
    JobDate TEXT NOT NULL,
);

CREATE TABLE customers (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    phoneNumber TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    userId INTEGER NOT NULL,
    email TEXT NOT NULL,
    address TEXT NOT NULL,
);

COMMIT;