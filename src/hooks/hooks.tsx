import { useEffect, useRef } from 'react';

export const useClickOutside = (handler: any) => {
  let domNode = useRef<HTMLDivElement>();

  useEffect(() => {
    let maybeHandler = (event: any) => {
      if (!domNode.current!.contains(event.target)) handler();
    };
    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });

  return domNode;
};
