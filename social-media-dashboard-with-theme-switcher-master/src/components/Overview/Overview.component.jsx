import React from "react";
import * as S from "./Overview.styles";

import Card from "components/Card/Card.component";
import CardList from "components/CardList/CardList.component";

import { getDataByNames } from "utils/";

function Overview() {
  const overviewOrder = ["facebook", "instagram", "twitter", "youtube"];
  const overviewRows = [
    getDataByNames(overviewOrder.slice(0, 2)),
    getDataByNames(overviewOrder.slice(2, 4)),
  ];

  return (
    <S.Overview>
      <S.OverviewHeading>Overview - Today</S.OverviewHeading>
      {overviewRows.map((row, idx) => (
        <CardList key={idx}>
          {row.map((rowItem, idx) => (
            <Card isOverviewCard key={idx} data={rowItem} />
          ))}
        </CardList>
      ))}
    </S.Overview>
  );
}

export default Overview;
