import './App.css';
import Button from './Components/Button';
import Input from './Components/Input';

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
      <hr />
      <Input
        type="text"
        placeholder="Enter Text"
        label="Input Box"
        helperText="I am a text type input box"
        name="typeText"
      />
      <hr />
      <Input
        type="text"
        placeholder="Enter Text"
        label="TextArea Box"
        helperText="I am a textarea type input box"
        name="typeText"
        multi={true}
      />
      <hr />
      <Input
        type="email"
        placeholder="Enter Email Address"
        label="Email Box"
        helperText="I am an email type box"
        name="typeEmail"
      />
      <hr />
      <Input
        type="password"
        placeholder="Enter Password"
        label="Password Box"
        helperText="I am a password type box"
        name="typePassword"
      />
      <hr />
      <Input
        type="date"
        placeholder="Enter date"
        label="Date Box"
        helperText="I am a Date type input box"
        name="typeDate"
      />
      <hr />
      <Input
        type="tel"
        placeholder="Enter Telephone Number"
        label="Telephone Box"
        helperText="I am a Telephone type input box"
        name="typeTel"
      />
      <hr />
    </div>
  );
}

export default App;
