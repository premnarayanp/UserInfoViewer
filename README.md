# React Native Assignment – User Information App

## Project Overview
This React Native app displays user information fetched from a public API. It allows navigation between users and provides a clean UI with a custom view component.

## Technology Stack
- **React Native 0.76+**
- **Expo Router** (File-based routing)
- **Redux Toolkit** (State management)

## Features
- Fetches and displays **80 users** from the API.
- **Previous/Next buttons** for navigation.
- **Left/Right arrow buttons** to jump **10 users forward/backward**.
- **Custom View Component** with:
  - Rounded design with shadow.
  - Editable fields (like address) with an edit button.  

## Installation & Setup
### Prerequisites
- Node.js & npm/yarn
- Expo CLI

### Steps to Run the Project
1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd <repository-name>
   ```
2. **Install dependencies:**
   ```sh
   npm install  # or yarn install
   ```
3. **Start the app:**
   ```sh
   npx expo start
   ```

## Folder Structure
```
/redux
 ├── actions/
 │   ├── actionTypes.js
 │   ├── userActions.js
 ├── reducers/
 │   ├── userReducer.js
 ├── store/
 │   ├── configureStore.js
/app
 ├── _layout.tsx     # Root layout with Redux Provider
 ├── index.tsx       # Fetches users and redirects to /user/0
 ├── user/[id].tsx   # Displays user details with navigation
/components
 ├── CustomView.tsx  # UI component for user details
```

## API Used
- **[Random Data API](https://random-data-api.com/api/users/random_user?size=80)**

## Available Screens
- **Home (`index.tsx`)** → Fetches users & redirects to the first user.
- **User Details (`user/[id].tsx`)** → Displays user info with navigation buttons.

## Navigation Controls
- **Previous (`«`)** → Moves **one user back**.
- **Next (`»`)** → Moves **one user forward**.
- **Left Arrow (`⬅️`)** → Moves **10 users back**.
- **Right Arrow (`➡️`)** → Moves **10 users forward**.

## Custom View Component
- **Displays user fields (email, name, etc.) inside a rounded box.**
- **Has light background & shadow effects for better UI.**
- **Edit button for editable fields (like Address).**

## Additional Information
- **Redux** is used to store user data & current index.
- **File-based routing** ensures smooth navigation without extra setup.

This project showcases **React Native best practices** with optimized navigation and state management. 🚀

