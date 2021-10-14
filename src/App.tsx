import React from 'react';

import PageRoutes from './pages';
import { Layout } from './templates';

export default function App() {
  return (
    <Layout>
      <PageRoutes />
    </Layout>
  );
}
