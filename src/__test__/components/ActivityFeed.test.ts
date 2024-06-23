// __tests__/ActivityFeed.test.tsx

import { render, screen } from '@testing-library/react';
import React from 'react';
import ActivityFeed from '@/components/ActivityFeed';

describe('ActivityFeed Component', () => {
  it('renders without crashing', () => {
    render(React.createElement(ActivityFeed));
  });

  it('displays the Activity Feed heading', () => {
    render(React.createElement(ActivityFeed));
    expect(screen.getByText('Activity Feed')).toBeDefined();
  });

  it('renders all activity items', () => {
    render(React.createElement(ActivityFeed));
    const activities = [
      'Kushantha Charuka created Contract #00124 need John Beige\'s signature',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas pretium neque',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Maecenas pretium neque'
    ];
    activities.forEach(activity => {
      expect(screen.getByText(activity)).toBeDefined();
    });
  });

  it('renders user avatars', () => {
    render(React.createElement(ActivityFeed));
    const avatars = ['/person_1.svg', '/person_2.svg'];
    avatars.forEach(avatar => {
      expect(screen.getByAltText(/Kushantha Charuka|Lorem ipsum/)).toBeDefined()
    });
  });

  it('displays activity dates', () => {
    render(React.createElement(ActivityFeed));
    const dates = [
      'Sep 16, 2022 at 11:30 AM',
      'Sep 16, 2022 at 11:45 AM'
    ];
    dates.forEach(date => {
      expect(screen.getByText(date)).toBeDefined();
    });
  });
});

export {};
