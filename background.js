// Extract user/repo from GitHub URL
function getRepoFromUrl(url) {
  const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
  if (match) {
    return { user: match[1], repo: match[2] };
  }
  return null;
}

// Open in new tab
function openInTab(url) {
  chrome.tabs.create({ url: url });
}

// Create context menu on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: 'open-deepwiki',
      title: 'Open in DeepWiki',
      contexts: ['page'],
      documentUrlPatterns: ['https://github.com/*']
    });
  });
});

// Handle context menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'open-deepwiki') {
    const repoInfo = getRepoFromUrl(tab.url);
    if (repoInfo) {
      const deepwikiUrl = `https://deepwiki.com/${repoInfo.user}/${repoInfo.repo}`;
      openInTab(deepwikiUrl);
    }
  }
});

// Handle message from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'openInTab') {
    openInTab(request.url);
  }
  return true;
});
