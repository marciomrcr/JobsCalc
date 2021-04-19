const Database = require("./config")

const initDb = {
  async init() {  

const db = await Database()

await db.exec(`CREATE TABLE profile(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    avatar TEXT,
    monthly_budget INT,
    hours_per_day INT,
    days_per_week INT,
    vacation_per_year INT,
    value_hour INT  
    )`)

await db.exec(`CREATE TABLE jobs(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    daily_hours INT,
    total_hours INT,
    created_at DATETIME
        )`)

await db.run(`INSERT INTO profile(
    name,
    avatar,
    monthly_budget,
    hours_per_day,
    days_per_week,
    vacation_per_year,
    value_hour
    ) VALUES (
        "Márcio Rodrigues", "https://github.com/marciomrcr.png",
        3000,    
        5,
        5,
        4,
        70)`)

        
        
await db.run(`INSERT INTO jobs(
    name,
    daily_hours,
    total_hours,
    created_at
    ) VALUES (
            "My Third Project",
            4,
            20,
            1617514376018)`)
            
await db.run(`INSERT INTO jobs(
    name,
    daily_hours,
    total_hours,
    created_at
    ) VALUES (
            "My Fourth Project",
            1,
            2,
            1617514376018)`)        

await db.close()
}
}

initDb.init()