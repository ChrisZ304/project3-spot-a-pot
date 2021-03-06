import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Jumbotron from '../components/Jumbotron';
import { ADD_Restroom } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

function Success() {
  const [addRestroom] = useMutation(ADD_Restroom);

  useEffect(() => {
    async function saveRestroom() {
      const restroom = await idbPromise('spotapotDB', 'get');
      const restrooms = restroom.map((item) => item._id);

      if (restrooms.length) {
        const { data } = await addRestroom({ variables: { restrooms } });
        const restroomData = data.addRestroom.restrooms;

        restroomData.forEach((restroom) => {
          idbPromise('restroom', 'delete', restroom);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveRestroom();
  }, [addRestroom]);

  return (
    <div>
      <Jumbotron>
        <h1>Success!</h1>
        <h2>Thank you for your update!</h2>
        <h2>You will now be redirected to the home page</h2>
      </Jumbotron>
    </div>
  );
}

export default Success;
