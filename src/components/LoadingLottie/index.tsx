import * as S from "./styles";
import Lottie from "react-lottie";
import * as animationData from "../../assets/portalAnimation.json";

export function LoadingLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <S.LottieBox>
      <S.LottieContainer>
        <Lottie options={defaultOptions} />
        <S.LottieLoading>Loading...</S.LottieLoading>
      </S.LottieContainer>
    </S.LottieBox>
  );
}
