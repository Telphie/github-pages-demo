import React, { useEffect, useState } from 'react';
import api from './api';
import type { RESPONSE_DATA } from './api';
import './App.css';

function App() {
  const [data, setData] = useState<RESPONSE_DATA>();
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    const fetchData = async () => {
      try {
        const response = await api.get.data();
        if (active) setData(response);
      } catch {
        if (active) setError(true);
      }
    };
    fetchData();
    return () => { active = false; };
  }, []);

  return <div className="App">{error ? 'Ошибка загрузки данных' : data ? <p>{data.greeting}</p> : 'no data'}</div>;
}

export default App;
