'use client';

import { useState } from 'react';
import { Search, MessageCircle, Calendar, BookOpen } from 'lucide-react';

export default function BottomNavBar() {
  const [activeTab, setActiveTab] = useState('search');

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t">
      <div className="max-w-md mx-auto flex justify-around items-center h-14">
        <button 
          className={`flex flex-col items-center gap-1 px-3 py-2 ${activeTab === 'search' ? 'text-pink-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('search')}
        >
          <Search className="h-6 w-6" />
          <span className="text-sm">Search</span>
        </button>
        <button 
          className={`flex flex-col items-center gap-1 px-3 py-2 ${activeTab === 'messages' ? 'text-pink-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('messages')}
        >
          <MessageCircle className="h-6 w-6" />
          <span className="text-sm">Messages</span>
        </button>
        <button 
          className={`flex flex-col items-center gap-1 px-3 py-2 ${activeTab === 'schedule' ? 'text-pink-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('schedule')}
        >
          <Calendar className="h-6 w-6" />
          <span className="text-sm">Schedule</span>
        </button>
        <button 
          className={`flex flex-col items-center gap-1 px-3 py-2 ${activeTab === 'vocab' ? 'text-pink-500' : 'text-gray-500'}`}
          onClick={() => setActiveTab('vocab')}
        >
          <BookOpen className="h-6 w-6" />
          <span className="text-sm">Vocab</span>
        </button>
      </div>
    </nav>
  );
} 