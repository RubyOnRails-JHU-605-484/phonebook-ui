import React, { useEffect, useState } from 'react';
import './App.css';
import PeopleTable from './PeopleTable';
import { Input, Button, Grid } from 'semantic-ui-react'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [ascending, setAscending] = useState(true);

  const handleSearchTermChange = event => setSearchTerm(event.target.value);

  const handleDirectionChange = event => setAscending(!ascending);

  useEffect(() => {
    const direction = ascending ? 'asc' : 'desc';
    fetch(`http://localhost:3000/contacts?search=${searchTerm}&direction=${direction}`)
      .then(response => response.json())
      .then(response => {
        setContacts(response);
        setIsLoading(false);
        // console.log("Contacts: ", response)
      })
      .catch(error => console.log(error));
  }, [searchTerm, ascending]);

  return (
    <div className="App">
      <Grid>
        <Grid.Row verticalAlign={'middle'}>
          <Grid.Column width={2}>
            <Input placeholder='Search...' value={searchTerm} onChange={handleSearchTermChange} />      
          </Grid.Column>
          <Grid.Column width={4}>
            <Button.Group>
              <Button toggle active={ascending} onClick={handleDirectionChange}>Ascending</Button>
              <Button.Or />  
              <Button toggle active={!ascending} onClick={handleDirectionChange}>Descending</Button>
            </Button.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      
      { isLoading && <h3>Loading...</h3> }
      { isLoading || <PeopleTable people={contacts} /> }
    </div>
  );
}

export default App;
