const INDEX = 'index';
const INDEXNAME = '首页';
const BOIL = 'boil';
const BOILNAME = '沸点';
const SEARCH = 'search';
const SEARCHNAME = '发现';
const ME = 'me';
const MENAME = '我';
const ACTIVE = '-active';
const TAB = 'Tab';

const getTabObj = (title, key, active, selectedTab, selected) => ({
  title,
  key,
  active,
  selectedTab,
  selected
})

export const GLOBALTABBAR = [
  getTabObj(INDEXNAME, INDEX, INDEX + ACTIVE, INDEX + TAB, true),
  getTabObj(BOILNAME, BOIL, BOIL + ACTIVE, BOIL + TAB, false),
  getTabObj(SEARCHNAME, SEARCH, SEARCH + ACTIVE, SEARCH + TAB, false),
  getTabObj(MENAME, ME, ME + ACTIVE, ME + TAB, false)
]