import React from 'react';

import '../../index.css';
import { IconButton } from './components/IconButton';
import { BlankCard, Card, CardProps } from './components/Card';
import { useMediaQuery } from '@react-hook/media-query';

interface CardSliderProps {
  title: string;
  data: CardProps[];
}
export const CardSlider = ({ title, data }: CardSliderProps) => {
  const isMobile = useMediaQuery('only screen and (max-width: 640px)');
  const [currentActive, setCurrentActive] = React.useState<number>(1);
  const [currentStatus, setCurrentStatus] = React.useState<'prev' | 'next'>(
    'next'
  );
  const handlePrev = () => {
    setCurrentStatus('prev');
    setCurrentActive(currentActive === 0 ? 0 : currentActive - 1);
  };

  const handleNext = () => {
    setCurrentStatus('next');
    setCurrentActive(
      currentActive === data.length - 1 ? data.length - 1 : currentActive + 1
    );
  };
  return (
    <div
      className={
        'h-fit w-screen flex flex-col justify-center relative overflow-hidden px-6 sm:px-0'
      }
    >
      <div
        className={
          'whitespace-pre w-full text-left  sm:text-center font-normal text-2xl leading-[length:32px] sm:text-6xl sm:leading-[length:64px] text-black'
        }
      >
        {title}
      </div>
      <div
        className={
          'mt-[length:36px] sm:mt-[length:55px] w-full flex flex-row gap-[length:18px] overflow-x-auto snap-x snap-mandatory scrollbar-hide'
        }
      >
        <BlankCard active={currentActive === 0} />
        {(data &&
          data.length &&
          data.map((card, index) => (
            <Card
              key={index}
              active={
                !isMobile
                  ? currentStatus === 'next'
                    ? currentActive === index - 1
                    : currentActive === index + 1
                  : currentActive === index
              }
              showInfo={currentActive === index}
              description={card.description}
              subDescription={card.subDescription}
              title={card.title}
              cover={card.cover}
            />
          ))) ||
          null}

        <BlankCard active={currentActive === data.length - 1} />
      </div>
      <div
        className={
          'absolute flex flex-row gap-[length:7px] right-[length:30px] sm:right-[length:calc(33.33%_+_16px)] bottom-0'
        }
      >
        <IconButton title={'previous'} icon={'prev'} onClick={handlePrev} />
        <IconButton title={'previous'} icon={'next'} onClick={handleNext} />
      </div>
    </div>
  );
};
