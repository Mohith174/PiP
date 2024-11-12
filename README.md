# Picture in Picture Application (PiP)

## Overview
The Picture in Picture (PiP) Application enables users to overlay a selected screen from their device (like a specific application window or the entire screen) on top of other windows. This functionality is useful for multitasking, allowing users to monitor one task while actively engaging in another. The application leverages modern web APIs to implement PiP and is optimized for use with Google Chrome due to the specific API compatibilities.

## Features
- **Start Picture in Picture Mode:** Users can select any screen or application to share in PiP mode.
- **Stop Picture in Picture Mode:** Users can exit the PiP mode and return the screen to normal display settings.

## Prerequisites
This application is designed to be used with Google Chrome, as it utilizes the `PictureInPictureWindow` API that is best supported on Chrome.

## Setup and Installation
To get the application running on your local machine, follow these steps:

1. **Clone the Repository:**
git clone https://github.com/mohith174/picture-in-picture.git

2. **Navigate to the Project Directory:**
cd picture-in-picture

3. **Open the Project:**
- Simply open the `index.html` file in Google Chrome to start the application.

## Usage Instructions
1. Click the **"Start Sharing"** button to prompt the screen/window selection dialog.
2. Select the window or screen you wish to share from the options provided by your operating system.
3. The selected content will then appear in a small overlay window that stays on top as you navigate other windows.
4. To stop the PiP mode, click the **"Stop Sharing"** button.

## Technologies Used
- **HTML5:** For structuring the web application.
- **CSS3:** For styling and animations.
- **JavaScript:** For implementing the PiP functionality.
