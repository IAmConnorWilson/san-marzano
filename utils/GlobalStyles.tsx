import { createGlobalStyle } from "styled-components";
import SanMarzanoTheme from "./theme";

const GlobalStyles = createGlobalStyle`
    html,
    body {
      font-size: 16px;
      overflow: hidden;

      width: 100%;
      height: 100% !important;
      margin: 0px;
      padding: 0px;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 300;
      background-color: ${SanMarzanoTheme.colors.white};
    }
    
    #root, #_next, #__next {
      height: 100%;
    }
    /* Text resets */
    /* avoid browser default inconsistent heading font-sizes */
    /* and pre/code too */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    pre,
    code {
      font-size: 1rem;
    }
    /* avoid browser default inconsistent heading font-sizes */
    /* and pre/code too */
    th,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 400;
    }

    /* remove the inconsistent (among browsers) default ul,ol padding or margin  */
    /* the default spacing on headings does not match nor align with 
      normal interline spacing at all, so let's get rid of it. */
    /* zero out the spacing around pre, form, body, html, p, blockquote as well */
    /* form elements are oddly inconsistent, and not quite CSS emulatable. */
    /*  nonetheless strip their margin and padding as well */
    ul,
    ol,
    li,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    pre,
    form,
    body,
    html,
    p,
    blockquote,
    fieldset,
    input {
      margin: 0;
      padding: 0;
    }

    div {
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 300;
    }

    a {
      text-decoration: none;

    }
`;

export default GlobalStyles;
