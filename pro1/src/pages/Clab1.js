import Header from '../components/Layout/Header';
import React, { useState } from 'react';
import "../styles/Clab1.css";
const Clab1 = () => {
  const [data, setData] = useState([

    
  ]);

  const [formData, setFormData] = useState({ pcname: '',pcnumber: '',version:'',ram:'',activationdate:'',antivirus:'' });
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addEntry = () => {
    if (formData.name && formData.age) {
      setData([...data, { id: Date.now(), ...formData }]);
      setFormData({ pcname: '',pcnumber: '',version:'',ram:'',activationdate:'',antivirus:''});
    }
  };

  const editEntry = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setFormData({ ...data[index] });
  };

  const updateEntry = () => {
    if (formData.pcname && formData.pcnumber ) {
      const updatedData = [...data];
      updatedData[editIndex] = { ...formData };
      setData(updatedData);
      setEditMode(false);
      setEditIndex(null);
      setFormData({ pcname: '',pcnumber: '',version:'',ram:'',activationdate:'',antivirus:''});
    }
  };

  const deleteEntry = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  return (
    <div>
      <Header></Header>
      <br></br>
      <br></br>
    
    <div style={{ maxWidth: '900px', margin: '20px auto', padding: '40px', border: '10px solid #ccc', borderRadius: '10px' }}>
      <h3>LOG SYSTEM</h3>
      <br></br>
      <br></br>
      <form></form>
      <div>
        <label>PCNAME:</label>
        <input type="text" name="pcname" value={formData.pcname} onChange={handleChange} />
          <br></br>
          <br></br>


        <label>PCNUMBER:</label>
        <input type="number" name="pcnumber" value={formData.pcnumber} onChange={handleChange} />
        <br></br>
        <br></br>

  
        <label>VERSION:</label>
        <input type="number" name="version" value={formData.version} onChange={handleChange} /><br></br>
        <br></br>

        <label>RAM:</label>
        <input type="text" name="ram" value={formData.ram} onChange={handleChange} /><br></br>
        <br></br>

        <label>ACTIVATIONDATE:</label>
        <input type="date" name="activationdate" value={formData.activationdate} onChange={handleChange} /><br></br>
        <br></br>

        <label>ANTIVIRUS:</label>
        <input type="text" name="antivirus" value={formData.antivirus} onChange={handleChange} />
        <br></br>
        <br></br>

        {editMode ? (
          <button onClick={updateEntry}>
            UPDATE
          </button>
        ) :
         (
          <button onClick={addEntry}>
            ADD PC
          </button>
        )}
      </div>
    </div>


<div>
      <table>
        <thead>
          <tr>
            <th>PCNAME</th>
            <th>PCNUMBER</th>
            <th>RAM</th>
            <th>ACTIVATION-DATE</th>
            <th>VERSION</th>
            <th>ANTIVIRUS</th>


            <th></th>
          </tr>
        </thead>
        
        <tbody>
          {data.map((entry, index) => (
            <tr key={entry.id}>
              <td>{entry.pcname}</td>
              <td>{entry.pcnumber}</td>
              <td>{entry.version}</td>
              <td>{entry.ram}</td>
              <td>{entry.activationdate}</td>
              <td>{entry.antivirus}</td>
              <td>
                <button onClick={() => editEntry(index)}>Edit</button>
                <button onClick={() => deleteEntry(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Clab1;






