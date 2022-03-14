import { Offcanvas } from "react-bootstrap";
import * as S from "./styles";
import logoImg from "../../assets/headerlogo.svg";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export function HamburguerMenu() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <S.MenuToggle onClick={() => handleShow()} className="Menu">
        <S.MenuToggleBar />
        <S.MenuToggleBar />
        <S.MenuToggleBar />
      </S.MenuToggle>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <S.Container>
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
            </S.Navigation>
          </S.Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
