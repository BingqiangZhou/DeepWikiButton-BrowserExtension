# DeepWiki Button

A simple Chrome extension that adds a floating button to GitHub pages for quick navigation to DeepWiki.

## Features

- **Floating Button** - DeepWiki logo button in the top-right corner of GitHub pages
- **Right-Click Menu** - Quick access via context menu
- **Dark/Light Mode** - Automatically adapts to your browser theme
- **Smart URL Parsing** - Extracts `user/repo` from any GitHub URL

## Installation

### Chrome / Edge / Brave

1. Download or clone this repository
2. Open `chrome://extensions/`
3. Enable **Developer mode** (top right)
4. Click **Load unpacked**
5. Select the `DeepWikiButton` folder

## Usage

### Floating Button
Click the DeepWiki logo button in the top-right corner of any GitHub repository page.

### Right-Click Menu
Right-click anywhere on a GitHub page and select **Open in DeepWiki**.

## URL Conversion

| GitHub URL | → | DeepWiki URL |
|------------|---|--------------|
| `github.com/user/repo` | → | `deepwiki.com/user/repo` |
| `github.com/user/repo/tree/main` | → | `deepwiki.com/user/repo` |
| `github.com/user/repo/blob/main/README.md` | → | `deepwiki.com/user/repo` |

Only the `user/repo` portion is preserved.

## Project Structure

```
DeepWikiButton/
├── manifest.json    # Extension config
├── content.js       # Floating button logic
├── background.js    # Context menu handler
├── styles.css       # Button styling
└── icons/           # Extension icons
```

## Development

After making changes, go to `chrome://extensions/` and click the reload button for this extension.

## License

MIT
