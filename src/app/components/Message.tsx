
interface MessageResponse {
  message: string;
}

interface Post {
  id: number
  title: string
  content: string
  timestamp: string
}

export default async function Message() {
    try {
        console.log('fetching message2');
      const res = await fetch('https://workers-bun-hono-drizzle.ymlik24.workers.dev/', {
        cache: 'no-store',
      });
      if (!res.ok) throw new Error('Failed to fetch message');
      const posts: Post[] = await res.json();
      return <ul className="space-y-6">
          {posts.map(p => (
            <li
              key={p.id}
              className="bg-white rounded-lg shadow p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {p.title}
              </h3>
              <p className="text-gray-700 mb-4">{p.content}</p>
              <time className="text-sm text-gray-500">{p.timestamp}</time>
            </li>
          ))}
        </ul>
      ;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      return <div>Error: {errorMessage}</div>;
    }
}
