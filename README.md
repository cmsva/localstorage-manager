# LocalStorage Manager

Extension for managing Local Storage quickly and safely: import, export, copy, edit and delete data directly from your browser.

## Overview

LocalStorage Manager is a lightweight browser extension that helps developers inspect and manage `localStorage` data with a clean interface. It is useful for debugging, testing, backing up browser data, and moving local storage values between environments.

## Features

- View all Local Storage keys and values
- Import Local Storage data from JSON
- Export Local Storage data to JSON
- Copy keys or values quickly
- Delete selected items
- Clear all Local Storage data
- Simple and lightweight interface
- Works locally without uploading data to any server

## Use Cases

- Debug web applications faster
- Backup Local Storage data
- Restore saved Local Storage states
- Move test data between browsers or devices
- Clear broken or outdated Local Storage values

## Installation

1. Download or clone this repository.
2. Open your browser extension page:
   - Chrome: `chrome://extensions`
   - Edge: `edge://extensions`
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the project folder.
6. The extension is now ready to use.

## Usage

1. Open the website you want to manage.
2. Click the LocalStorage Manager extension icon.
3. Choose an action:
   - **Export** to download Local Storage as JSON
   - **Import** to restore Local Storage from JSON
   - **Copy** to copy data
   - **Delete** to remove selected data
   - **Clear All** to reset Local Storage

## Data Privacy

This extension works directly in your browser. It does not send your Local Storage data to any external server.

## Project Structure

```txt
localstorage-manager/
├── manifest.json
├── popup.html
├── popup.css
├── popup.js
├── icons/
└── README.md
