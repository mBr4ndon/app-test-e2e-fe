import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="container">
        <h1>Create and see posts in real-time</h1>

        <form>

          <div className="input-wrapper">
            <div className="form-group">
              <label>Title</label>
              <input type="text" name="title"/>
            </div>

            <div className="form-group">
              <label>Description</label>
              <input type="text" name="description"/>
            </div>
          </div>

          <button>ADD POST</button>

        </form>
      </div>
  )
}

export default App
