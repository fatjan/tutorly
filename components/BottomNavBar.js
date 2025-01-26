'use client';

import { Search, MessageCircle, Calendar, BookOpen } from 'lucide-react';

export default function BottomNavBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t">
      <div className="max-w-md mx-auto flex justify-around items-center h-14">
        <button className="flex flex-col items-center gap-1 px-3 py-2">
          <Search className="h-6 w-6" />
          <span className="text-sm">Search</span>
        </button>
        <button className="flex flex-col items-center gap-1 px-3 py-2">
          <MessageCircle className="h-6 w-6" />
          <span className="text-sm">Messages</span>
        </button>
        <button className="flex flex-col items-center gap-1 px-3 py-2">
          <Calendar className="h-6 w-6" />
          <span className="text-sm">Schedule</span>
        </button>
        <button className="flex flex-col items-center gap-1 px-3 py-2">
          <BookOpen className="h-6 w-6" />
          <span className="text-sm">Vocab</span>
        </button>
      </div>
    </nav>
  );
} 