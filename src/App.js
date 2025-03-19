import logo from './logo.svg';
import './App.css';

import { RowsPhotoAlbum } from 'react-photo-album';
import "react-photo-album/rows.css";
import photos from './Components/Photos';

function App() {
  return (
    <RowsPhotoAlbum photos={photos}/>
  );
}

export default App;
