import React from "react";
import { MainHeading } from "../MainHeading";
import * as S from "./styles";

type Props = {
  children: React.ReactNode;
  title: string;
};

const ListWrapper: React.FC<Props> = ({ children, title }) => {
  return (
    <S.Container>
      <MainHeading title={title} />
      {children}
    </S.Container>
  );
};

export default ListWrapper;
