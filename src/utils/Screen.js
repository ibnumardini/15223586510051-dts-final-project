export const ScrollToTop = () => {
  window.scrollTo(0, 0);
};

export const UrlScreenNow = () => {
  return window.location.href;
};

export const PageNow = () => {
  const arrPage = UrlScreenNow().split("/");

  return arrPage[arrPage.length - 1];
};
