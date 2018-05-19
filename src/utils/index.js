export const firstUpperCase = (str) => str.toLowerCase().replace(/\b[a-z]/g, s => s.toUpperCase());

export const getUrlIsFromTabBar = (url, tabBar) => tabBar.find((item) => url.indexOf(item) > -1);