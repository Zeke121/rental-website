// app/page.js
import { Navigation } from '@/components/Navigation';

export default function Home() {
  return (
    <main>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">Welcome to Rental Website</h1>
        {/* Add your home page content here */}
      </div>
    </main>
  );
}