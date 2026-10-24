/*
* this is the candidates with their id, name, email, and skills
*/

CREATE TABLE candidates (
    candidate_id PRIMARY KEY,
    candidate_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    skills TEXT NOT NULL,
)

/*
* this is the jobs with their id, title, description, and required skills
*/

CREATE TABLE jobs (
    job_id PRIMARY KEY,
    job_title VARCHAR(100) NOT NULL,
    job_description TEXT NOT NULL,
    required_skills TEXT NOT NULL,
)