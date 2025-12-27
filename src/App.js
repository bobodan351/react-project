import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import Table from "./Table";

function App() {
  const API_URL = "http://localhost:1234/";
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    (async () => fetchItems())();
    setIsLoading(true);
  }, [reqType]);

  return (
    <main>
      <Form reqType={reqType} setReqType={setReqType} />
      {/* <List items={items} isLoading={isLoading} setIsLoading={setIsLoading} /> */}
      <Table items={items}/>
    </main>
  );
}

export default App;
