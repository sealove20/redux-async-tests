import React, { useState, useEffect } from "react";

import { handleReceivePhotos } from "./store/actions/photos";
import { handleReceiveUsers } from "./store/actions/users";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [loading, setLoading] = useState(true);

  const { photos } = useSelector(state => state.photos);
  const { users } = useSelector(state => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([
      dispatch(handleReceiveUsers()),
      dispatch(handleReceivePhotos())
    ]).then(() => setLoading(false));
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <p>CARREGANDO</p>
      ) : (
        <div>
          {photos.map(photo => (
            <>
              <li key={photo.id}>{photo.title}</li>
              <img src={photo.url} alt="" />
            </>
          ))}
          {users.map(user => (
            <>
              <li key={user.id}>{user.name}</li>
            </>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
