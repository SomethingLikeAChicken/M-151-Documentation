import { useState, useEffect } from "react";
import axios from "axios";
import NavigationMenu from "./components/NavigationMenu";

const AdminInterfacePage = () => {
  const [words, setWords] = useState([]);
  const [newWord, setNewWord] = useState("");
  const [newHint, setNewHint] = useState("");

  useEffect(() => {
    axios.get("/api/AdminInterface").then((response) => {
      setWords(response.data);
    });
  }, []);

  const handleEdit = (id, newWord, newHint) => {
    // Send a PUT request to update the word and hint in the database
    axios
      .put(`/api/AdminInterface/${id}`, { word: newWord, hint: newHint })
      .then((response) => {
        // Update the words state to reflect the change
        setWords((prevWords) => {
          return prevWords.map((word) => {
            if (word.id === id) {
              return response.data;
            } else {
              return word;
            }
          });
        });
      });
  };

  const handleRemove = (id) => {
    // Send a DELETE request to remove the word from the database
    axios.delete(`/api/AdminInterface/${id}`).then(() => {
      // Update the words state to remove the deleted word
      setWords((prevWords) => {
        return prevWords.filter((word) => word.id !== id);
      });
    });
  };

  const handleAdd = () => {
    // Send a POST request to add a new word and hint to the database
    axios
      .post("/api/AdminInterface", { word: newWord, hint: newHint })
      .then((response) => {
        // Update the words state to add the new word
        setWords((prevWords) => {
          return [...prevWords, response.data];
        });
        // Clear the input fields
        setNewWord("");
        setNewHint("");
      });
  };

  return (
    <>
    <NavigationMenu></NavigationMenu>
      <div class="wrapper">
        <h1>Admin Interface</h1>
        <table>
          <thead>
            <tr>
              <th>Word</th>
              <th>Hint</th>
              <th>Edit</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {words.map((word) => (
              <tr key={word.id}>
                <td>{word.word}</td>
                <td>{word.hint}</td>
                <td>
                  <button
                    onClick={() => handleEdit(word.id, "new word", "new hint")}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={() => handleRemove(word.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h2>Add a new word:</h2>
          <label>
            Word:
            <input
              type="text"
              value={newWord}
              onChange={(e) => setNewWord(e.target.value)}
            />
          </label>
          <label>
            Hint:
            <input
              type="text"
              value={newHint}
              onChange={(e) => setNewHint(e.target.value)}
            />
          </label>
          <button onClick={handleAdd}>Add Word</button>
        </div>
      </div>
    </>
  );
};

export default AdminInterfacePage;
