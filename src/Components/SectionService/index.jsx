import * as S from "./styles";
import ItemList from "./ItemList";
import PhoneIcon from "../../assets/icon-phone.svg";
import SoluctionIcon from "../../assets/icon-solutions.svg";
import OptionIcon from "../../assets/icon-options.svg";
import CardIcon from "../../assets/icon-card.svg";
import ImagePhone from "../../assets/phone.png";

export default function SectionService() {
  return (
    <S.Section id="section-service">
      <S.Container>
        <S.DivLeft>
          <S.Span data-aos="fade-up" data-aos-delay="100" >Serviços exclusivos</S.Span>
          <S.Titulo data-aos="fade-up" data-aos-delay="250">Gerencie suas finanças sem sair de casa</S.Titulo>
          <S.Paragrafo data-aos="fade-up" data-aos-delay="270">
            Veja como você pode cuidar das suas finanças pelo app Itaú de forma
            segura, rápida e o melhor, no conforto da sua casa.
          </S.Paragrafo>

          <S.Ul>
            <S.Li data-aos="fade-up" data-aos-delay="300">
              <ItemList
                img={PhoneIcon}
                alt="Phone icon"
                p="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver."
              />
            </S.Li>
            <S.Li data-aos="fade-up" data-aos-delay="400">
              <ItemList
                img={SoluctionIcon}
                alt="Soluction icon"
                p="Soluções de empréstimos e negociação para organizar suas finanças"
              />
            </S.Li>
            <S.Li data-aos="fade-up" data-aos-delay="500">
              <ItemList
                img={OptionIcon}
                alt="Option icon"
                p="Diversas opções de investimentos, de acordo com o seu perfil de investidor"
              />
            </S.Li>
            <S.Li data-aos="fade-up" data-aos-delay="400">
              <ItemList
                img={CardIcon}
                alt="Card icon"
                p="Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual."
              />
            </S.Li>
          </S.Ul>
        </S.DivLeft>
      </S.Container>

      <S.DivRight>
        <S.Img src={ImagePhone} alt="Phone" data-aos="fade-up" data-aos-delay="150" />
      </S.DivRight>
    </S.Section>
  );
}
