import * as React from 'react';
import { Searchbar, useTheme } from 'react-native-paper';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const theme = useTheme();
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar style={{ backgroundColor: theme.colors.onSecondary, width:300 , height:55}}
      placeholder="Search.."
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchBar;
