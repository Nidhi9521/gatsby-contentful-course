import React from "react";
import {
  PriceOption,
  PriceGroupWrapper,
  PriceOptionInner,
  MostPopularLabel,
} from "./style";
import { RichText } from "components";

export const PriceGroup = ({ priceOption }) => {
  console.log("Price");
  console.log(priceOption);
  return (
    <PriceGroupWrapper>
      {priceOption.map((e) => (
        <PriceOption key={e.id}>
          <PriceOptionInner isMostPopular={e.mostPopular}>
            {!!priceOption.mostPopular && (
              <MostPopularLabel>Most popular</MostPopularLabel>
            )}
            <h2>{e.title}</h2>
            <h3>£{e.amountPerMonth} / month</h3>
            <RichText raw={e.description.raw} />
          </PriceOptionInner>
        </PriceOption>
      ))}
    </PriceGroupWrapper>
  );
};
