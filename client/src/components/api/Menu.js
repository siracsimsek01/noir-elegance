import axios from 'axios';

class Menu extends React.Component {
  state = {
    menuItems: []
  };

  componentDidMount() {
    // If your server is running on a different port or domain, you'll need to specify the full URL
    axios.get('/api/menu')
      .then((response) => {
        this.setState({ menuItems: response.data });
      })
      .catch((error) => {
        console.error('There was an error fetching the menu items', error);
      });
  }

  render() {
    // Render your menu items here using this.state.menuItems
  }
}
