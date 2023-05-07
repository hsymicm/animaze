import { useRef, useEffect } from 'react';

export function SetDocumentTitle(title, prevailOnMount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnMount) {
        document.title = defaultTitle.current;
      }
    },
    []
  );
}

export default function DocumentTitle({ title, children }) {
  SetDocumentTitle(title);
  return children;
}
