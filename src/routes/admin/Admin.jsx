import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UsergroupAddOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, Input } from 'antd';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import MainTable from '../../components/MainTable';

const { Header, Sider, Content } = Layout;
const { Search } = Input;

function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const onSearch = () => { };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          theme="dark"
          mode="inline"
          items={[
            {
              key: '1',
              icon: <UsergroupAddOutlined />,
              label: <NavLink className="sidebar__link" to="/admin/today-menu">Today Menu</NavLink>,
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: <NavLink className="sidebar__link" to="/admin/menu">Menu</NavLink>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingLeft: '0' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              color: '#fff',
            }}
          />
          <Search
            className="custom-search"
            style={{ width: '800px', margin: '0 auto' }}
            placeholder="Search text"
            allowClear
            size="large"
            enterButton="Search"
            onSearch={onSearch}
          />
          <Menu
            style={{ width: '200px', margin: '0 auto' }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                label: 'nav 1',
              },
              {
                key: '2',
                label: 'nav 2',
              },
            ]}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: 'lightgrey',
          }}
        >
          {location.pathname !== '/admin/today-menu' && <MainTable />}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Home;
