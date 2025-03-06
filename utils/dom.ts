export const scrollToError = (container?: Element | string) => {
  const el =
    typeof container === 'string'
      ? document.querySelector(container || '') || document
      : document;
  const [firstErrorElm] = el.querySelectorAll('.is-error');
  firstErrorElm?.scrollIntoView({ behavior: 'smooth', block: 'center' });
};
