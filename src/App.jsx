import './App.css';

function App() {
  const arr = [
    { name: "abhiram", age: "23", anime: "yes" },
    { name: "saidulu", age: "23", anime: "no" },
    { name: "saikiran", age: "23", anime: "no" }
  ];

  return (
    <>
      <h1 style={{color:"black"}}>Creating a Table</h1>
      <table id="table" style={{ border: "2px solid blue" }}>
        <thead>
          <tr>
            <th style={{ border: "2px solid green", padding: "8px" ,color:"black"}}>Name</th>
            <th style={{ border: "2px solid green", padding: "8px",color:"black" }}>Age</th>
            <th style={{ border: "2px solid green", padding: "8px",color:"black" }}>Anime</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((element, index) => (
            <tr key={index}>
              <td style={{ border: "2px solid green", padding: "8px",color:"black" }}>{element.name}</td>
              <td style={{ border: "2px solid green", padding: "8px" ,color:"black"}}>{element.age}</td>
              <td style={{ border: "2px solid green", padding: "8px",color:"black" }}>{element.anime}</td>
            </tr>
          ))}
        </tbody>
      </table><br />
      <h1 style={{color:"black" }}>list of names</h1>
      <div>
        {arr.map((element,index)=>(
            <ul key={index}>
              <li style={{color:"black" }}>
                  {element.name}
              </li>
            </ul>
          ))}
      </div>
       
    </>
  );
}

export default App;
