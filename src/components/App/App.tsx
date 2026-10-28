import { Navigate, Route, Routes } from 'react-router';
import HomePage from '../../pages/HomePage/HomePage';
import ProjectsPage from '../../pages/ProjectsPage/ProjectsPage';
import SkillsPage from '../../pages/SkillsPage/SkillsPage';
import Layout from '../Layout/Layout';

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="skills" element={<SkillsPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
);

export default App;
