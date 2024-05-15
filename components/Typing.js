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
    const options = {
      strings: words,
      typeSpeed: 65,
      backSpeed: 65,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };

    typedRef.current = new Typed(typedRef.current, options);

    return () => {
      typedRef.current.destroy();
    };
  }, [words]);

  return (
    <>
      <span ref={typedRef} style={{ whiteSpace: "pre" }} />
    </>
  );
};

export default Typing;
