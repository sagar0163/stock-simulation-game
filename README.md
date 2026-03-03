# Stock Simulation Game

A virtual stock trading game with real-time market simulation. Practice trading stocks risk-free with virtual money in a simulated market environment.

![Version](https://img.shields.io/badge/version-2.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Platform](https://img.shields.io/badge/platform-Android%20%7C%20iOS%20%7C-Web-blue)

---

## 📱 Overview

Stock Simulation Game is a cross-platform mobile application that allows users to:
- Practice stock trading with virtual money
- Experience real-time market fluctuations
- Build and manage their portfolio
- Learn trading strategies without risking real money

---

## 🏗️ Architecture

```
stock-simulation-game/
├── android/                    # Android native app (Capacitor)
│   ├── app/                    # Main Android application
│   ├── build.gradle            # Gradle build configuration
│   └── gradle/                 # Gradle wrapper files
├── stock-sim-frontend/         # Frontend web app (Angular)
├── stock-sim-game-backend/     # Backend API (Node.js + Express)
├── .github/workflows/          # CI/CD pipelines
└── capacitor.config.json       # Capacitor configuration
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Angular + TypeScript |
| **Mobile** | Capacitor (Android/iOS) |
| **Backend** | Node.js + Express.js |
| **Database** | MongoDB |
| **Real-time** | WebSockets |
| **Build** | Gradle (Android) |
| **CI/CD** | GitHub Actions |

---

## ✨ Features

### Core Trading Features
- 📈 **Buy/Sell Stocks** - Trade with virtual currency
- 💼 **Portfolio Management** - Track your investments
- 📊 **Market Analytics** - View real-time price changes
- 📰 **News Feed** - Stay updated with market news

### Game Mechanics
- 🎰 **Starting Capital** - New players receive virtual money
- 💰 **Top-up System** - Add more virtual money to your account
- 🤖 **AI Market Simulation** - Realistic price fluctuations
- ⏰ **Scheduled Events** - Regular market updates

### Platform Support
- 🌐 **Web** - Browser-based trading interface
- 📱 **Android** - Native Android APK
- 🍎 **iOS** - Native iOS app (coming soon)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Java 21
- Android Studio (for Android development)
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/sagar0163/stock-simulation-game.git
cd stock-simulation-game
```

2. **Install dependencies:**
```bash
npm install
```

3. **Setup backend:**
```bash
cd stock-sim-game-backend
npm install
```

4. **Configure environment:**
```bash
# Create .env file in stock-sim-game-backend/
cp .env.example .env
# Edit with your MongoDB URI and other configs
```

5. **Run development server:**
```bash
# Terminal 1 - Backend
cd stock-sim-game-backend
npm start

# Terminal 2 - Frontend (for web)
npm run start

# Terminal 3 - Android
npm run android
```

---

## 📦 Building APK

### Using GitHub Actions (Recommended)

The repository includes automated CI/CD that builds the Android APK on every push to `main`.

1. Go to **Actions** tab on GitHub
2. Select **Build Android APK** workflow
3. Click **Run workflow**
4. Download artifact from workflow run

### Manual Build

```bash
# Sync Capacitor
npx cap sync android

# Build Android
cd android
./gradlew assembleDebug

# APK location: android/app/build/outputs/apk/debug/
```

---

## 📁 Project Structure

### Backend Structure
```
stock-sim-game-backend/
├── server.js                 # Entry point
├── api/
│   ├── config/
│   │   └── db.js            # Database configuration
│   ├── controllers/
│   │   └── loginController.js
│   ├── Middleware/
│   │   └── sessionMiddleware.js
│   ├── routes/
│   │   ├── index.js
│   │   └── loginRoutes.js
│   └── services/
│       └── loginService.js
└── package.json
```

### Android Structure
```
android/
├── app/
│   ├── src/main/
│   │   ├── java/unreal/sim/stock_simulator/io/
│   │   │   └── MainActivity.java
│   │   └── res/
│   │       ├── values/
│   │       ├── layout/
│   │       └── drawable/
│   └── build.gradle
├── build.gradle
├── gradle.properties
└── settings.gradle
```

---

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/login` | User login |
| GET | `/portfolio` | Get user portfolio |
| POST | `/trade/buy` | Buy stocks |
| POST | `/trade/sell` | Sell stocks |
| GET | `/market` | Get current market data |
| GET | `/news` | Get latest market news |

---

## 📝 Environment Variables

Create a `.env` file in `stock-sim-game-backend/`:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/stock-sim
SESSION_SECRET=your-secret-key
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Sagar Jadhav**
- GitHub: [@sagar0163](https://github.com/sagar0163)
- Twitter: [@sagarjadhav063](https://twitter.com/sagarjadhav063)

---

## 🙏 Acknowledgments

- MEAN Stack tutorials and documentation
- Capacitor community
- MongoDB Atlas for database hosting
