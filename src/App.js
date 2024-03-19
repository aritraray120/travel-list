export default function App() {

  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}

function Logo() {
  return <h1>For away</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your tip?</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">List</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have x items on your list, & you already packed x (x%)</em>
    </footer>
  );
}