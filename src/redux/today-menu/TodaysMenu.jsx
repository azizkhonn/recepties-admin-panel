/* eslint-disable no-unused-vars */
import { Table, Button, theme } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromTodayMenu } from '../actions/types'; // adjust import path as needed

const TodayMenu = () => {
  const todayMenu = useSelector((state) => state.todayMenu.todayMenu);
  const dispatch = useDispatch();

  const handleRemove = (key) => {
    dispatch(removeFromTodayMenu(key));
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Ingredients',
      dataIndex: 'ingredients',
      key: 'ingredients',
      render: (ingredients) => ingredients.join(', '),
    },
    {
      title: 'Instructions',
      dataIndex: 'instructions',
      key: 'instructions',
      render: (instructions) => instructions.join(' '),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button
          className='btn_delete'
          onClick={() => handleRemove(record.key)}
          style={{ backgroundColor: 'red', borderColor: 'red', color: 'white' }}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={todayMenu}
      pagination={{ pageSize: 5 }}
      scroll={{ x: 1500, y: 500 }}
    />
  );
};

export default TodayMenu;
