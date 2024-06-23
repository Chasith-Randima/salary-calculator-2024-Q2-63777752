// components/ActivityFeed.tsx
import React from 'react';

interface Activity {
  user: string;
  action: string;
  task: string;
  date: string;
  avatar: string;
}

const activities: Activity[] = [
  {
    user: 'Kushantha Charuka',
    action: 'created',
    task: "Contract #00124 need John Beige's signature",
    date: 'Sep 16, 2022 at 11:30 AM',
    avatar: '/person_1.svg'
  },
  {
    user: 'Lorem ipsum',
    action: 'dolor sit amet',
    task: 'consectetur adipiscing elit. Maecenas pretium neque',
    date: 'Sep 16, 2022 at 11:45 AM',
    avatar: '/person_2.svg'
  },
  {
    user: 'Lorem ipsum',
    action: 'dolor sit amet',
    task: 'consectetur adipiscing elit. Maecenas pretium neque',
    date: 'Sep 16, 2022 at 11:45 AM',
    avatar: '/person_2.svg'
  },
];

interface ActivityRowProps {
  activity: Activity;
}

const ActivityRow: React.FC<ActivityRowProps> = ({ activity }) => {
  return (
    <div className="flex items-start py-4">
      <div className="flex-shrink-0">
        <img className="h-10 w-10 rounded-full" src={activity.avatar} alt={activity.user} />
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">
          {activity.user} <span className="text-gray-500">{activity.action}</span> <span className="text-pink-600">{activity.task}</span>
        </p>
        <p className="text-sm text-gray-500">{activity.date}</p>
      </div>
    </div>
  );
};

const ActivityFeed: React.FC = () => {
  return (
    <div className="p-4 bg-white shadow rounded">
      <div className="border-b pb-4">
        <h2 className="text-lg font-semibold">Activity Feed</h2>
      </div>
      <div>
        {activities.map((activity, index) => (
          <ActivityRow key={index} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
