import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Infraestrutura de pagamentos pela internet</h1>
          <p>
            MIlhões de empresas de todos os tamanhos — de startups até as top500
            da Fortune — usam software e APIs da Stripe para aceitar pagamentos,
            enviar payouts, e gerenciar seus negócios on-line.
          </p>
          <button className="btn">Junte-se a nós</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
