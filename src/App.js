import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Counter from './components/Counter/Counter';
import TodosView from './views/TodosView';
// import { myAction } from './rudux/actions';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Counter />} />
          <Route path="/todos" element={<TodosView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
