// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
import { CardSlider } from './CardSlider';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

export default {
  title: 'Component/CardSlider',
  component: CardSlider,
  argTypes: {
    title: {
      control: 'text',
      description: 'This is the title of the card slider',
      defaultValue: 'Don’t trust us,\n' + 'trust our clients',
    },
    data: {
      control: 'object',
      defaultValue: [
        {
          cover: 'https://source.unsplash.com/random/100x100',
          title: 'Owning my home',
          description:
            'Hosting my studio changed my life and gifted me with memorable experiences and people.',
          subDescription: 'Client in Milan',
        },
        {
          cover: 'https://source.unsplash.com/random/200x200',
          title: 'Owning my home',
          description:
            'Hosting my home allowed me to become an entrepreneur and laid down a path to financial freedom.',
          subDescription: 'Client in Atlanta',
        },
        {
          cover: 'https://source.unsplash.com/random/300x300',
          title: 'Owning my home',
          description:
            'We’re able to keep our culture alive by hosting our pasta-making experience.',
          subDescription: 'Client in Palombara Sabina',
        },
        {
          cover: 'https://source.unsplash.com/random/400x400',
          title: 'Owning my home',
          description:
            'Airbnb has allowed me to create my own job doing what I love — taking care of guests in our home.',
          subDescription: 'Host in Chiang Mai',
        },
      ],
    },
  },
} as ComponentMeta<typeof CardSlider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardSlider> = (args) => (
  <CardSlider {...args} />
);

export const Primary = Template.bind({});
