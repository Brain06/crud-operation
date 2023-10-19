import React, { useState } from 'react';

function Crud() {
  const [data, setData] = useState([
    { id: 1, name: 'Moong doll', subname: 'Md', number: '57', minnumber: '47', disprice:'40' },
    { id: 2, name: 'Door doll', subname: 'Dd',number: '67', minnumber: '57', disprice:'50' },
    { id: 3, name: 'Anil', subname: 'semiya',number: '45', minnumber: '40', disprice:'35' },
    { id: 4, name: 'Rani', subname: 'Rava',number: '40', minnumber: '35', disprice:'20' },
    { id: 5, name: 'Achu', subname: 'murukku',number: '45', minnumber: '40', disprice:'35' },
    { id: 6, name: 'Popular', subname: 'Appalam',number: '55', minnumber: '50', disprice:'40' },
  ]);

  const [newItem, setNewItem] = useState({ name: '', number: '', minnumber: '', disprice: '' });
  const [editItem, setEditItem] = useState(null);

  const addRow = () => {
    setData([...data, { id: data.length + 1, ...newItem }]);
    setNewItem({ name: '', subname: '', number: '', minnumber: '', disprice: '' });
  };

  const updateRow = () => {
    const newData = data.map((item) => (item.id === editItem.id ? editItem : item));
    setData(newData);
    setEditItem(null);
  };

  const deleteRow = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <div className="App">
      <h1>CRUD Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Items</th>
            <th>SubItems</th>
            <th>Price</th>
            <th>Min-price</th>
            <th>dis-price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{editItem?.id === item.id ? (
                <input
                  type="text"
                  value={editItem.name}
                  onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
                />
              ) : item.name}</td>
              <td>{editItem?.id === item.id ? (
                <input
                  type="text"
                  value={editItem.subname}
                  onChange={(e) => setEditItem({ ...editItem, subname: e.target.value })}
                />
              ) : item.subname}</td>
              <td>{editItem?.id === item.id ? (
                <input
                  type="text"
                  value={editItem.number}
                  onChange={(e) => setEditItem({ ...editItem, number: e.target.value })}
                />
              ) : item.number}</td>
              <td>{editItem?.id === item.id ? (
                <input
                  type="text"
                  value={editItem.minnumber}
                  onChange={(e) => setEditItem({ ...editItem, minnumber: e.target.value })}
                />
              ) : item.minnumber}</td>
               <td>{editItem?.id === item.id ? (
                <input
                  type="text"
                  value={editItem.disprice}
                  onChange={(e) => setEditItem({ ...editItem, disprice: e.target.value })}
                />
              ) : item.disprice}</td>
              <td>
                {editItem?.id === item.id ? (
                  <button onClick={updateRow}>Save</button>
                ) : (
                  <>
                    <button onClick={() => setEditItem(item)}>Edit</button>
                    <button onClick={() => deleteRow(item.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <input
          type="text"
          placeholder="Item Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="SubItem"
          value={newItem.subname}
          onChange={(e) => setNewItem({ ...newItem, subname: e.target.value })}
        />
        <input
          type="number"
          placeholder="00"
          value={newItem.number}
          onChange={(e) => setNewItem({ ...newItem, number: e.target.value })}
        />
         <input
          type="number"
          placeholder="00"
          value={newItem.minnumber}
          onChange={(e) => setNewItem({ ...newItem, minnumber: e.target.value })}
        />
        <input
          type="number"
          placeholder="00"
          value={newItem.disprice}
          onChange={(e) => setNewItem({ ...newItem, disprice: e.target.value })}
        />
        <button onClick={addRow}>Create</button>
      </div>
    </div>
  );
}

export default Crud;