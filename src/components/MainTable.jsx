import { Table, Button, message, notification } from 'antd'; // Import notification from 'antd'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from '../api/axios';
import { addToTodayMenu } from '../redux/actions/types'; // Adjust the import path as needed

const MainTable = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/recipes');
      setData(response.data.recipes);
      setLoading(false);
    } catch (error) {
      message.error('Failed to fetch data from the API');
      setLoading(false);
    }
  };

  const handleAddToTodayMenu = (record) => {
    dispatch(addToTodayMenu(record));
    showNotification(record.name); // Call showNotification when item is added
  };

  const showNotification = (itemName) => {
    notification.success({
      message: 'Item Added',
      description: `${itemName} has been added to Today's Menu.`,
    });
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
        <Button onClick={() => handleAddToTodayMenu(record)}>Add to Todays Menu</Button>
      ),
    },
  ];

  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={data.map((item) => ({ ...item, key: item.id }))}
      pagination={{ pageSize: 5 }}
      scroll={{ x: 1500, y: 500 }}
    />
  );
};

export default MainTable;
