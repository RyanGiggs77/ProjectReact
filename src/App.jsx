import { useEffect, useState } from 'react';
import './index.css';
import { Layout, Input } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sider/Sidebar';
import Navbar from './components/Header/Navbar';
import Promo from './pages/Promo';
import Dashboard from './pages/Dashboard';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
 
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 576);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize
    );
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            trigger={null}
            breakpoint="md"
            onBreakpoint={(broken) => setCollapsed(broken)}
            collapsedWidth={isMobile ? 0 : 80}
            className="h-lvh left-0 top-0 bottom-0"
            style={{
              position: 'fixed',
              backgroundColor: '#ECF4E9',
              height: '100vh',
            }}
          >
            <Sidebar collapsed={collapsed} />
          </Sider>

          {/* Main Layout */}
          <Layout style={{ marginLeft: isMobile ? 0 : collapsed ? 80 : 200, transition: 'margin 0.2s' }}>
            {/* Header Fixed */}
            <Header
              style={{
                position: 'fixed',
                top: 0,
                left: isMobile ? 0 : collapsed ? 80 : 200,
                right: 0,
                backgroundColor: '#ECF4E9',
                zIndex: 1000,
                height: 64,
                padding: '0 16px',
                transition: 'left 0.2s',
              }}
            >
              <Navbar />
            </Header>

            {/* Content */}
            <Content
              style={{
                marginTop: '64px',
                overflow: 'initial',
                padding: 24,
                background: '#fff',
                minHeight: '100vh',
              }}
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/promo" element={<Promo />} />
              </Routes>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Footer</Footer>
          </Layout>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
