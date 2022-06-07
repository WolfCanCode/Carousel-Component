import React from 'react';

interface IconButtonProps {
  title: string;
  icon: 'prev' | 'next';
  onClick?: VoidFunction;
  disabled?: boolean;
}
export const IconButton = ({
  title,
  icon,
  onClick,
  disabled,
}: IconButtonProps) => (
  <button
    name={title}
    aria-label={title}
    disabled={disabled}
    onClick={onClick}
    className={
      'h-[length:40px] w-[length:40px] rounded-full hover:opacity-80 bg-[#F5F3EC] flex justify-center'
    }
  >
    {icon === 'prev' && PrevIcon}
    {icon === 'next' && NextIcon}
  </button>
);

const PrevIcon = (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    className={
      'block fill-transparent h-4 w-4 stroke-[#717171] stroke-[length:4px] overflow-visible m-auto'
    }
    aria-hidden="true"
    focusable="false"
  >
    <g fill="none">
      <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path>
    </g>
  </svg>
);

const NextIcon = (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    className={
      'block fill-transparent h-4 w-4 stroke-[#717171] stroke-[length:4px] overflow-visible m-auto'
    }
    aria-hidden="true"
    role="presentation"
    focusable="false"
  >
    <g fill="none">
      <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path>
    </g>
  </svg>
);
