import useStore from './hooks/useStore';

function App() {
  const store = useStore();
  console.log(store);

  return <div>Hello!</div>;
}

export default App;
