import React from 'react';

function AdminPage() {
  return (
    <div className="min-h-screen">
      <header className="px-5 py-4 flex justify-end items-center border-b-2 border-gray-300">
        <a className="text-blue-500 hover:text-blue-600 hover:underline" href="/auth">
          Sign In
        </a>
      </header>

      <h1 className="text-center">Small Town Library</h1>
    </div>
  );
}

export default AdminPage;
