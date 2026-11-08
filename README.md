# AptiAce 🎯

**A comprehensive, student-centric aptitude preparation platform** designed to help job aspirants crack technical recruitment tests and campus placements.

---

## 🚀 Features

- **Quantitative Aptitude** — 16 topics (Number System, HCF & LCM, Percentages, Probability, and more)
- **Logical Reasoning** — Pattern-based and analytical questions
- **Verbal Ability** — 19 topics (Synonyms, Antonyms, Comprehension, Spotting Errors, and more)
- **Formula Sheet** — Built-in reference formulas for every topic during the quiz
- **Instant Feedback** — See the correct answer and explanation after every question
- **Difficulty Badges** — Easy / Medium / Hard labeled on every question
- **User Accounts** — Register and login with email and password (bcrypt-hashed)
- **Session-based Auth** — Stay logged in across page refreshes

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Node.js + Express |
| Database | SQLite3 |
| Auth | bcrypt + express-session |
| Frontend | Vanilla HTML, CSS, JavaScript |

---

## ⚡ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Aaditya-SP/APTIACE.git
cd APTIACE

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env and set your SESSION_SECRET

# 4. Start the server
npm start
```

Open your browser and go to **http://localhost:3000**

---

## 📁 Project Structure

```
APTIACE/
├── server.js              # Express server — API routes, auth, DB
├── aptiace.db             # SQLite database (auto-created on first run)
├── questions.sql          # Seed file for quantitative questions
├── .env.example           # Environment variable template
├── public/
│   ├── login.html         # Login page
│   ├── register.html      # Registration page
│   ├── main.html          # Dashboard
│   ├── quantitative.html  # Quantitative topics list
│   ├── logical.html       # Logical reasoning topics list
│   ├── verbal.html        # Verbal ability topics list
│   ├── quiz.html          # Quiz UI
│   ├── style.css          # Global styles
│   ├── script.js          # Auth JS (login/register/logout)
│   └── js/
│       └── quiz.js        # Full quiz engine
└── data/
    └── logical/           # Logical reasoning question data
```

---

## 🌐 API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| `POST` | `/register` | Create a new account |
| `POST` | `/login` | Login and start session |
| `GET` | `/logout` | End session |
| `GET` | `/check-login` | Check if user is logged in |
| `GET` | `/api/questions?topic=X` | Fetch all questions for a topic |
| `GET` | `/api/import-questions` | Import questions from `questions.sql` |
| `GET` | `/api/test-db` | Health check |

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork** the repository
2. **Create a branch**: `git checkout -b feat/your-feature-name`
3. **Make your changes**
4. **Stage specific files** (never `git add .`): `git add <file>`
5. **Commit**: `git commit -m "feat: describe your change"`
6. **Push**: `git push origin feat/your-feature-name`
7. **Open a Pull Request** on GitHub

### Good First Issues
- Add more practice questions for any topic
- Improve mobile responsiveness
- Add a quiz timer
- Add score history / progress tracking

---

## 📄 License

ISC
