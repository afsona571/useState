import React from 'react';

const Sidebar = () => (
  <aside className="w-64 bg-[#2f264d] p-6 space-y-6 hidden lg:block">
    <h2 className="text-xl font-semibold">Фильтры</h2>
    {['Status', 'Price', 'Collections', 'Chains', 'Categories'].map(section => (
      <details key={section} className="text-gray-300">
        <summary className="cursor-pointer font-medium mb-2">{section}</summary>
        <ul className="pl-4 space-y-1 text-gray-400 text-sm">
          <li><input type="checkbox" id={`${section}-1`} className="mr-2" /><label htmlFor={`${section}-1`}>Option 1</label></li>
          <li><input type="checkbox" id={`${section}-2`} className="mr-2" /><label htmlFor={`${section}-2`}>Option 2</label></li>
        </ul>
      </details>
    ))}
  </aside>
);

export default Sidebar;
