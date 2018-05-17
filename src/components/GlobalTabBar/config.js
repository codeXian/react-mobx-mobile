export const INDEX = 'index';
const INDEXNAME = '首页';
const BOIL = 'boil';
const BOILNAME = '沸点';
const SEARCH = 'search';
const SEARCHNAME = '发现';
const ME = 'me';
const MENAME = '我';
const ACTIVE = '-active';
export const TAB = 'Tab';

const getTabObj = (title, key, active, selectedTab) => ({
  title,
  key,
  active,
  selectedTab
})

export const GLOBALTABBAR = [
  getTabObj(INDEXNAME, INDEX, INDEX + ACTIVE, INDEX + TAB),
  getTabObj(BOILNAME, BOIL, BOIL + ACTIVE, BOIL + TAB),
  getTabObj(SEARCHNAME, SEARCH, SEARCH + ACTIVE, SEARCH + TAB),
  getTabObj(MENAME, ME, ME + ACTIVE, ME + TAB)
]