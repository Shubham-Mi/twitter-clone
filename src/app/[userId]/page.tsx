export default function Page({ params }: { params: { userId: string } }) {
  return (
    <div>
      <h1>User Profile: {params.userId}</h1>
    </div>
  );
}
