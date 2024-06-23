"use client";
// import TaskList from "@/components/TaskList";
import ActivityFeed from "@/components/ActivityFeed";
import Tasks from "@/components/Tasks";
import Sidebar from "@/components/Sidebar";
import WelcomeMessage from "@/components/WelcomeMessage";
// import TaskPriorityChart from "@/components/TaskPriorityChart";
import TaskPriorityChart from "@/components/TaskPriorityChart";
// import Pagination from "@/components/Pagination_New";
import { useState } from "react";
// import StatusList from "@/components/StatusList";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pageCount = 3; // Example page count, replace with your actual page count

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto">
        <WelcomeMessage />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-2">
            <Tasks />
          </div>
          <div>
            <TaskPriorityChart />
            <ActivityFeed />
          </div>
        </div>
      </div>
    </main>
  );
}
