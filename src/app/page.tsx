import { Suspense } from 'react';
import Message from './components/Message';
import LoadingIndicator from './components/LoadingIndicator';
export const experimental_ppr = true;


export default function MessagePage() {
  return (
    <div>
      <h1>Static Content</h1>
      <p>This content loads instantly!</p>
      <Suspense fallback={<LoadingIndicator />}>
        <Message />
      </Suspense>
    </div>
  );
}
