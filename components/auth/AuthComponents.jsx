// components/auth/AuthComponents.jsx
'use client';
import { useRouter } from 'next/navigation';

export function SignIn() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <h2 className="text-3xl font-bold text-center">Sign In</h2>
        {/* Add your sign in form here */}
      </div>
    </div>
  );
}

export function ListProperty() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8">List Your Property</h2>
      {/* Add your property listing form here */}
    </div>
  );
}