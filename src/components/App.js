import React, { useState, useRef } from 'react';
import style from './App.module.css';
import Repos from './Repos';

function App() {
  const [username, setUsername] = useState('')
  const input = useRef();

  function submitHandler(e) {
    e.preventDefault()
    if (input.current) {
      // @ts-ignore
      setUsername(input.current.value)
    }
  }

  return (
    <div className="App">
      <header className={style.header}>
        <h3>
          Github Starred Repos
        </h3>
      </header>
      <form className={style.form} onSubmit={submitHandler}>
        <input
          className={style.input}
          type="text"
          ref={input}
          placeholder="Username"
        />
      </form>
      <Repos username={username} />
    </div>
  );
}

export default App;
