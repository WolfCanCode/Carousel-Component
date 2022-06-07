import React, { useEffect, useRef } from 'react';

export interface CardProps {
  cover: string;
  title: string;
  description: string;
  subDescription: string;
  active: boolean;
  showInfo: boolean;
}
export const Card = ({
  active,
  showInfo,
  cover,
  title,
  description,
  subDescription,
}: CardProps): JSX.Element => {
  const currentCardRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (active) {
      currentCardRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  }, [active]);
  return (
    <div
      className={'flex-[1_0_80%] sm:flex-[1_0_32.5%] snap-center snap-always'}
      ref={currentCardRef}
    >
      <div className={'w-full'}>
        <img
          alt={title}
          src={cover}
          className={'object-cover w-full rounded-lg'}
        />
      </div>
      <div
        className={`w-full mt-[length:36px] sm:mt-[length:48px] sm:font-light sm:font-normal text-black text-base leading-[length:24px] sm:text-2xl sm:leading-[length:32px] space-x-[length:-0.015em]  transition-all duration-200 ease-in-out ${
          showInfo ? 'opacity-100' : 'opacity-0 duration-400'
        }`}
      >
        {description}
      </div>
      <div className={'mt-[length:24px] sm:mt-[length:48px]'}>
        <div
          className={`text-base leading-[length:40px] text-[#636260] transition-all duration-200 ease-in-out ${
            showInfo ? 'opacity-100' : 'opacity-0 duration-400'
          }`}
        >
          {subDescription}
        </div>
      </div>
    </div>
  );
};

export const BlankCard = ({ active }: { active?: boolean }) => {
  const currentCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (active) {
      currentCardRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [active]);
  return (
    <div
      ref={currentCardRef}
      className={'flex-[1_0_32.5%] snap-center snap-always hidden sm:block'}
    />
  );
};
