# Just Another Text Editor (J.A.T.E)

## Description

Just Another Text Editor (J.A.T.E) is a progressive web application (PWA) designed for writing notes and code snippets. It allows users to create, save, and retrieve content both online and offline, utilizing IndexedDB for data persistence. The application meets PWA criteria and offers an installable experience on various devices.

## Features

- **Offline Functionality**: Create and edit text without an internet connection.
- **Data Persistence**: Utilizes IndexedDB for storing user input, ensuring reliability.
- **Service Worker**: Registers a service worker to cache static assets and improve performance.
- **Installable**: Allows users to install the app on their desktop or mobile device.
- **User-Friendly Editor**: Features a CodeMirror editor for enhanced text editing experience.

## Technologies Used

- **Frontend**: 
  - HTML, CSS, JavaScript
  - CodeMirror (for the text editor)
  - Workbox (for service workers)
  - idb (for IndexedDB wrapper)
- **Backend**: 
  - Node.js
  - Express
- **Build Tools**: 
  - Webpack (for bundling assets)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/alisha1025/TextCraft.git
   cd project-directory
