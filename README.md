# Game Release Countdown

## Overview
This project displays a countdown timer for the release dates of various games. Users can view the current release date of a game they are interested in, search for different games by category, and have their current filters saved locally.

![image](https://github.com/user-attachments/assets/26f506dc-c140-494e-8b9f-3e4ca69675a0)


## User Stories
### As a user:
1. **View Countdown Timer**:
    - I want to view the current release date of a game that I am interested in displayed as a countdown.
    - I want to see what platforms the game is available on, as well as what genres the game is underneath the countdown.
    - I want to see a promotional image of the game.

2. **Search by Category**:
    - I want to be able to search different games by category (e.g., filter, genre).

3. **View blurb**:
    - I want to see a blurb about the game when I click on it.

## Features
- **Countdown Timer**: Displays the time remaining until the release date of each game.
- **Game Information**: Shows a blurb about the game, including its filter and genre.
- **Search Functionality**: Allows users to filter games by category and genre using checkboxes.

## Technologies Used
- **HTML**: Structure of the web page.
- **CSS (Tailwind CSS)**: Styling of the web page.
- **JavaScript**: Functionality for countdown timers and filtering games.
- **GitHub Pages**: Hosting the web page.

## Setup Instructions
1. **Clone the Repository**:
    ```bash
    git@github.com:Cinnlight/ArcadeHype.git
    cd game-release-countdown
    ```

2. **Open the Project**:
    - Open the `index.html` file in your web browser to view the countdown timers.

3. **Add Your Games**:
    - Update the `games` array in `countdown.js` with your game details, including name, filter, genre, release date, and image URL.

4. **Deploy to GitHub Pages**:
    - Push your changes to the `main` branch.
    - Go to the repository settings on GitHub.
    - Enable GitHub Pages and select the `main` branch as the source.

## Usage
- **View Countdown**: Open the web page to see the countdown timers for each game.
- **Filter Games**: Use the checkboxes to filter games by category and genre.
- **Read Platforms and Genres**: Read the platforms and genres relevent to each game underneath the countdown timer.
- **View Blurbs**: Click on the game to see a small blurb about it.

## Contributing
1. **Fork the Repository**: Click the "Fork" button at the top right of this page.
2. **Clone Your Fork**:
    ```bash
    git clone git@github.com:Cinnlight/group-02-game-release-tracker.git
    cd ArcadeHype
    ```
3. **Create a Branch**:
    ```bash
    git checkout -b feature-branch
    ```
4. **Make Your Changes**: Add your changes and commit them.
5. **Push to Your Branch**:
    ```bash
    git push origin feature-branch
    ```
6. **Create a Pull Request**: Open a pull request to merge your changes into the `main` branch.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
- Thanks to all contributors and users for their support and feedback.
- Special thanks to the core coding group for this project: anton10mata, dauntss, Duck-Method, ricardoshade, and Cinnlight.
- Information for games, as well as preview images, pulled from https://www.ign.com
