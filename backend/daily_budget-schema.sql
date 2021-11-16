
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL
);

CREATE TABLE favorite_currencies (
    id SERIAL PRIMARY KEY,
  user_id REFERENCES users,
  PRIMARY KEY (user_id)
);

CREATE TABLE budget (
    id SERIAL PRIMARY KEY,
  total_money INTEGER,
  start_date TEXT,
  end_date TEXT,
  user_id REFERENCES users,
  PRIMARY KEY (user_id)
);

CREATE TABLE expenses (
    id SERIAL PRIMARY KEY,
  expense_date TEXT,
  amount INTEGER,
  description TEXT,
  user_id REFERENCES users,
  PRIMARY KEY (user_id)
)


