// src/App.jsx
import BookList from './Product';
import favouriteBooks from './Books';
export default function App() {
  return (
    <div>
      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
    </div>
  );
}
