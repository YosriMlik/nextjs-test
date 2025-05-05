
interface MessageResponse {
  message: string;
}

export default async function Message() {
    try {
        console.log('fetching message2');
      const res = await fetch('http://localhost:8080/api/hello-message', {
        cache: 'no-store',
      });
      if (!res.ok) throw new Error('Failed to fetch message');
      const data: MessageResponse = await res.json();
      return <div>Server Message: {data.message}</div>;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      return <div>Error: {errorMessage}</div>;
    }
}
