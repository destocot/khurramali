export default function NotFound() {
  return (
    <div className="not-found">
      <img
        className="not-found__img"
        src="https://images.unsplash.com/photo-1543615294-40348f9cf5df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
        alt="giraffe photo"
        loading="lazy"
      />
      <h2 className="not-found__message">Page not found!</h2>
    </div>
  );
}
