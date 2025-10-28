export function ChildComponent({ data }) {
  return (
    <div className="answer" role="region" aria-label="answer">
      {data ? (
        <p>Data Loaded: {JSON.stringify(data)}</p>
      ) : (
        <p>No data found in localStorage.</p>
      )}
    </div>
  );
}