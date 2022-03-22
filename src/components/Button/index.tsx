import * as S from "./styles";

export function Button({ type, text }) {
  return <S.Button type={type}>{text}</S.Button>;
}
