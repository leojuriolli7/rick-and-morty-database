import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./styles";
import logoImg from "../../assets/headerlogo.svg";
import Image from "next/image";

export function Header() {
  const router = useRouter();
  console.log("~ router", router);

  return (
    <S.Container>
      <S.Content>
        <S.ImageContainer>
          <Image
            src={logoImg}
            alt="Small logo"
            width={40}
            height={40}
            onClick={() => window.open("https://rickandmortyapi.com/")}
          />
        </S.ImageContainer>
        <S.Navigation>
          <S.UnorganizedList>
            <S.ListItem>
              <Link href="/">
                <S.MenuOption isSelected={router.pathname === "/"}>
                  Characters
                </S.MenuOption>
              </Link>
            </S.ListItem>
            <S.ListItem>
              <Link href="/episodes">
                <S.MenuOption isSelected={router.pathname === "/episodes"}>
                  Episodes
                </S.MenuOption>
              </Link>
            </S.ListItem>
            <S.ListItem>
              <Link href="/locations">
                <S.MenuOption isSelected={router.pathname === "/locations"}>
                  Locations
                </S.MenuOption>
              </Link>
            </S.ListItem>
          </S.UnorganizedList>
        </S.Navigation>
      </S.Content>
    </S.Container>
  );
}
