import './App.css';
import Button from './Components/Button/index.js';

function App() {
  return (
    <div>
      <Button />
      <Button label="Basic" variant="basic" />
      <Button label="Link" variant="link" />
      <Button label="Secondary" variant="secondary" />
      <Button label="Danger" variant="danger" />
      <Button label="Disabled" disabled={true} />
      <Button label="Primary" variant="primary" />
      <Button label="Outline" variant="outline" />
      <Button label="Medium" variant="primary" size="medium" />
      <Button label="Large" variant="outline" size="large" />
    </div>
  );
}

export default App;
