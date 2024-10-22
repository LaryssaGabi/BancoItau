import * as S from "./styles";

import ImageAppleStore from "../../assets/btn-apple-store.svg";
import ImageGooglePlay from "../../assets/btn-google-play.svg";
import Arrow from "../../assets/arrow-explorer.svg";

import WomanImage from "../../assets/woman.png";

export default function SectionHero() {
  const handleScroll = () => {
    const sectionService = document.getElementById("section-service");
    sectionService.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <S.Section>
      <S.Container>
        <S.DivLeft>
          <S.Titulo>Tenha seu Banco na palma da mão</S.Titulo>
          <S.Paragrafo>
            Todas as operações que você precisa em um só lugar. Simples,
            completo e feito para você.
          </S.Paragrafo>

          <S.DivButtons>
            <S.Button as="a" href="https://apps.apple.com/br/app/banco-ita%C3%BA-conta-cart%C3%A3o-e/id474505665" target="_blank" rel="noopener noreferrer">
              <img src={ImageAppleStore} alt="Apple Store" />
            </S.Button>
            <S.Button as="a" href="https://play.google.com/store/apps/dev?id=6670232843082341199&hl=pt_BR" target="_blank" rel="noopener noreferrer">
              <img src={ImageGooglePlay} alt="Google Play" />
            </S.Button>
          </S.DivButtons>

          <S.ButtonExplorer onClick={handleScroll}>
            <img src={Arrow} alt="Arrow down" />
            <S.Span>Continue explorando</S.Span>
          </S.ButtonExplorer>
        </S.DivLeft>

        <S.ImageWoman src={WomanImage} alt="Woman" />
      </S.Container>
    </S.Section>
  );
}