import { Suspense } from 'react';
import Posts from './components/Posts';
import LoadingIndicator from './components/LoadingIndicator';
export const experimental_ppr = true;


export default function PostsPage() {
  return (
    <div>
      <h1>Static Content</h1>
      <p>This content loads instantly!</p>
      <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">TO DO List</h1>
      <Suspense fallback={<LoadingIndicator />}>
        <Posts />
      </Suspense>
      </div>
    </div>
  );
}
