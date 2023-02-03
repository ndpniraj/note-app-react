const App = () => {
  return (
    <div className="container">
      <h1>Note Application</h1>
      <div>
        <input placeholder="Title" type="text" className="input" />
      </div>
      <div>
        <textarea placeholder="Description" className="textarea"></textarea>
      </div>
    </div>
  );
};

export default App;
