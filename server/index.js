const express = require("express");
const app = express();
const cors = require('cors');
const pool = require("./db");

app.use(cors());

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});

// grab candidate data from the data base
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>BridgeBack</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        background: #f4f7fb;
                        color: #1f2937;
                    }
                    header {
                        background: #1d4ed8;
                        color: white;
                        padding: 1rem 2rem;
                    }
                    main {
                        max-width: 1100px;
                        margin: 2rem auto;
                        padding: 0 1rem;
                    }
                    .hero, .section {
                        background: white;
                        border-radius: 12px;
                        padding: 2rem;
                        margin-bottom: 1.5rem;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                    }
                    h1, h2 {
                        margin-top: 0;
                    }
                    .cards {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                        gap: 1rem;
                    }
                    .card {
                        background: #eef4ff;
                        border-radius: 10px;
                        padding: 1rem;
                    }
                </style>
            </head>
            <body>
                <header>
                    <h1>BridgeBack</h1>
                </header>

                <main>
                    <section class="hero">
                        <h2>Welcome back</h2>
                        <p>Find opportunities that fit your skills and goals.</p>
                    </section>

                    <section class="section">
                        <h2>Featured Matches</h2>
                        <div class="cards">
                            <div class="card">
                                <h3>Software Engineer</h3>
                                <p>Remote • Full-time</p>
                            </div>
                            <div class="card">
                                <h3>Product Analyst</h3>
                                <p>Hybrid • Contract</p>
                            </div>
                            <div class="card">
                                <h3>Data Specialist</h3>
                                <p>On-site • Part-time</p>
                            </div>
                        </div>
                    </section>
                </main>
            </body>
        </html>
    `);
});



