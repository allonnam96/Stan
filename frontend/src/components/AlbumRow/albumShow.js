import { useEffect } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { getAlbum, fetchAlbum } from "../../store/album";

const AlbumShow = () => {
    const { albumId } = useParams();
    const dispatch = useDispatch();
    const album = useSelector(getAlbum(albumId));
  
    useEffect(() => {
      dispatch(fetchAlbum(albumId));
    }, [dispatch, albumId]);
    
    return (
      <div>
        <h2>{album?.title}</h2>
        <p>{album?.img_url}</p>
        <Link to="/">album Index</Link>
      </div>
    );
  }
  
  export default AlbumShow;