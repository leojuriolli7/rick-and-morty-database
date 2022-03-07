import * as S from "./styles";
import Image from "next/image";
import logoImg from "../../assets/rickandmortylogo.png";

export function MainHeading({ title }) {
  return (
    <S.Container>
      <Image src={logoImg} alt="Logo" />
      <S.ListTitle>{title}</S.ListTitle>
    </S.Container>
  );
}
