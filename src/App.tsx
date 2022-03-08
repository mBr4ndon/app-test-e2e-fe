import { FormEvent, useState } from 'react';
import { PostsList } from './components/PostsList';
import { api } from './services/api';
import './styles.css';

export default function App() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  async function handleForm(event: FormEvent) {
    event.preventDefault();
    console.log(title, description);

    await api.post('/posts', { title, description });

    // clear inputs
    setTitle('');
    setDescription('');
  }

  return (
      <div className="container">
        <h1>Create and see posts in real-time</h1>
        <form onSubmit={handleForm}>
          <div className="input-wrapper">
            <div className="form-group">
              <label>Title</label>
              <input 
                type="text" 
                name="title"
                value={title}
                onChange={event => setTitle(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <input 
                type="text" 
                name="description"
                value={description}
                onChange={event => setDescription(event.target.value)}
              />
            </div>
          </div>
          <button>ADD POST</button>
        </form>

        <PostsList />
      </div>
  );
}

