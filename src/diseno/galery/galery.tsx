import React, { useEffect, useMemo, useState } from 'react';
import './galery.css';
import useMedia from './useMedia';
import useMeasure from 'react-use-measure';
import shuffle from 'lodash.shuffle';
import { useTransition, a } from '@react-spring/web';

export const Galery = ({ imagenes }: { imagenes: any }) => {
  const columns = useMedia(
    ['(min-width: 950px)', '(min-width: 700px)', '(min-width: 460px)'],
    [4, 3, 2],
    1,
  );

  const [ref, { width }] = useMeasure();

  const [items, set] = useState(imagenes);
  useEffect(() => {
    set(imagenes);
  }, [imagenes]);

  useEffect(() => {
    const t = setInterval(() => set(shuffle), 15000);
    return () => clearInterval(t);
  }, []);

  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
    let gridItems = items.map((child: { height: number; width: number }, i: any) => {
      const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
      const x = (width / columns) * column; // x = container width / number of columns * column index,
      const y = (heights[column] += child.height / 2) - child.height / 2; // y = it's just the height of the current column
      return { ...child, x, y, width: width / columns, height: child.height / 2 };
    });
    return [heights, gridItems];
  }, [columns, items, width]);

  const [file, setFile] = useState(null);

  const transitions = useTransition(gridItems, {
    key: (item: { imagen: HTMLImageElement; height: number; width: number }) => item.imagen,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  return (
    <div style={{ maxWidth: '1300px', width: '100%', minWidth: '300px' }}>
      <div ref={ref} className="listas" style={{ height: Math.max(...heights) }}>
        {transitions((style, item, keys) => (
          <a.div
            style={style}
            onClick={() => {
              setFile(keys.item.imagen);
            }}
          >
            {item.imagen}
          </a.div>
        ))}
      </div>
      {file !== null && (
        <div className="popup-media" style={{ display: file ? 'block' : 'none' }}>
          <span onClick={() => setFile(null)}>&times;</span>
          {file}
        </div>
      )}
    </div>
  );
};
