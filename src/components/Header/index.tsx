import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./styles";
import logoImg from "../../assets/headerlogo.svg";
import Image from "next/image";
import { HamburguerMenu } from "../HamburguerMenu";

export function Header() {
  const router = useRouter();

  return (
    <S.Container>
      <S.Content>
        <S.ImageContainer>
          <Image
            src={logoImg}
            alt="Small logo"
            width={45}
            height={45}
            onClick={() => window.open("https://rickandmortyapi.com/")}
          />
        </S.ImageContainer>
        <S.Navigation>
          <S.UnorganizedList>
            <S.ListItem isSelected={router.pathname === "/"}>
              <Link href="/">Characters</Link>
            </S.ListItem>
            <S.ListItem isSelected={router.pathname === "/episodes"}>
              <Link href="/episodes">Episodes</Link>
            </S.ListItem>
            <S.ListItem isSelected={router.pathname === "/locations"}>
              <Link href="/locations">Locations</Link>
            </S.ListItem>
          </S.UnorganizedList>
          <HamburguerMenu />
        </S.Navigation>
      </S.Content>
    </S.Container>
  );
}
