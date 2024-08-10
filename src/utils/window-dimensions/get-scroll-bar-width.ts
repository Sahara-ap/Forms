export const getScrollBarWidth = (): number => {
  const div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  document.body.append(div);
  const { clientWidth, offsetWidth } = div;
  const scrollBarWidth = offsetWidth - clientWidth;
  div.remove();

  return scrollBarWidth;
};
