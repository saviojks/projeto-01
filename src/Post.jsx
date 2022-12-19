export function Post(props) {
  return (
    <div>
      <strong>{props.author}</strong>
      <h1>{props.content}</h1>
    </div>
  );
}
