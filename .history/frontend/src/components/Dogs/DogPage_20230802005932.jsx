import React from "react";
import { DogsCart } from "./DogsCart";
import './dogs.css';

export const DogPage = (props) => {
  const { allDogs } = props;
  return (
    <>
      <section className="dogs-container">
        {allDogs.map((item) => {
          return (
            <div key={item.id}>
              <DogsCart
                name={item.name}
                breed={item.breed}
                price={item.price}
                image={item.imageUrl}
                description={item.description}
              />
            </div>
          );
        })}
      </section>
    </>
  );
};
