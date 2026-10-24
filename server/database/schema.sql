/*
* this is the candidates with their id, name, email, and skills
*/

CREATE TABLE candidates (
    candidate_id PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    skills TEXT NOT NULL,
)

/*
* this is the jobs with their id, title, description, and required skills
*/

CREATE TABLE jobs (
    job_id PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    required_skills TEXT NOT NULL,
)