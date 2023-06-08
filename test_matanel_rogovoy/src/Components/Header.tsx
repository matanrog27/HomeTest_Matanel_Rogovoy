import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

export default function Header() {
    const [value, setValue] = React.useState(2);

    //change tabs
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    //styles for tabs
    const styles = {
        link: {
            textDecoration: 'none',
            color: 'white',
            
    
        },
    
        tabs: {
            //color : 'black',
            backgroundColor: '#e8e8e8'
        }
    }

    return (
        <Tabs value={value} centered onChange={handleChange} style={{backgroundColor:'#474744',marginBottom:10}} aria-label="disabled tabs example">
            <Tab
                style={styles.link}
                label={"Home"}
                disabled={value === 0}
                component={Link}
                to="/"
            />
            <Tab
                style={styles.link}
                label={"Favorites"}
                disabled={value === 1}
                component={Link}
                to="/Lists"
            />
        </Tabs>
    );
    
}



