import NotesList from "./Components/NotesList";
import Header from "./Components/Header";

const App = () => {
  const [notes, setNotes] = [{ id: 0, heading: "", text: "", date: null }];
  return (
    <div className="App container">
      <Header />
      <NotesList />
    </div>
  );
};
export default App;
