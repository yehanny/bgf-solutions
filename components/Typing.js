import Typed from "typed.js";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useTranslations } from "next-intl";

const Element = styled.span`
  text-align: center;
`;

const Typing = ({ words }) => {
  const t = useTranslations("Typing");
  words = [t("text1"), t("text2"), t("text3"), t("text4")];
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: words,
      typeSpeed: 65,
      backSpeed: 65,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typedRef} />;
};

export default Typing;
