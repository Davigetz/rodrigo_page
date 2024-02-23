import { useState } from 'react';
import cn from 'classnames';
import chroma from 'chroma-js';
import './fab.css';

const FAB = ({ actions }: { actions: any }) => {
  console.log(actions.length);
  let colors = chroma.scale(['#565693', '#48639C']).colors(actions.length + 1);
  const [open, setOpen] = useState(false);

  // Set open state to true if user hover over "ul" element
  const mouseEnter = () => setOpen(true);

  // Set open state to false if user hover out of "ul" element
  const mouseLeave = () => setOpen(false);

  return (
    <ul
      className="fab-container"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      style={actions[0].exteriorStyle}
    >
      <li className="fab-button">{actions[0].iconoExterior}</li>
      {actions.map((action: any, index: number) => (
        <li
          style={{
            transitionDelay: `${index * 25}ms`,
            backgroundColor: `${colors[index]}`,
            color: 'white',
          }}
          className={cn('fab-action', { open })}
          key={action.label}
          onClick={action.onClick}
        >
          {action.icon}
          <span className="tooltip">{action.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default FAB;
