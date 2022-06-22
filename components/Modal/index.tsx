/* eslint-disable consistent-return */
import { useEffect, createContext, useContext, FC, useRef } from 'react';

import styled from 'styled-components';

interface ModalContextType {
  onClose: Function;
}

interface ModalComposite {
  Header: FC;
  Content: FC;
  Footer: FC;
}

type BackgroundOpacity = 'light' | 'dark';

type StyleVariant = 'default' | 'full-page';

interface ModalProps {
  isOpen: boolean;
  onClose: Function;
  className?: string;
  children: any;
  backgroundOpacity?: BackgroundOpacity;
  variant?: StyleVariant;
}

interface ModalWrapperProps {
  isOpen: boolean;
  className?: string;
  backgroundOpacity?: BackgroundOpacity;
  variant?: StyleVariant;
}

interface ModelInnerWrapperProps {
  variant?: StyleVariant;
}

const ModalContext = createContext<ModalContextType>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose: () => {},
});

const CloseIcon = () => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
        fill="#333333"
      />
    </svg>
  );
};

const Header: FC = ({ children }: any) => {
  const { onClose } = useContext(ModalContext);
  return (
    <ModalHeader>
      {children}
      <ModalHeaderClose onClick={() => onClose()}>
        <CloseIcon />
      </ModalHeaderClose>
    </ModalHeader>
  );
};

const Content: FC = ({ children }: any) => {
  return <ModalContent>{children}</ModalContent>;
};

const Footer: FC = ({ children }: any) => {
  return <ModalFooter>{children}</ModalFooter>;
};

const Modal: FC<ModalProps> & ModalComposite = ({
  isOpen,
  onClose,
  children,
  className,
  backgroundOpacity = 'dark',
  variant = 'default',
}: ModalProps) => {
  // wrapper to register clicks for this modal
  const innerWrapperRef = useRef(null);

  useEffect(() => {
    const handleClick = (event: { target: any }) => {
      // fighting with TS that this is possibly null which it cant be since we null check
      // eslint-disable-next-line
      const current: any = innerWrapperRef.current;

      // if the modal is open and the click is outside of the content wrapper
      // close the modal
      if (!!current && !current.contains(event.target) && isOpen) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClick, false);

    return () => {
      document.removeEventListener('mousedown', handleClick, false);
    };
  }, [isOpen, onClose]);

  return (
    <ModalContext.Provider value={{ onClose }}>
      <ModalWrapper isOpen={isOpen} backgroundOpacity={backgroundOpacity} variant={variant}>
        <ModalInnerWrapper ref={innerWrapperRef} className={className} variant={variant}>
          {children}
        </ModalInnerWrapper>
      </ModalWrapper>
    </ModalContext.Provider>
  );
};

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  border-top: 1px solid #e0e0e0;
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    & > * {
      flex: 1 100%
      :not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  border-bottom: 1px solid #e0e0e0;
  box-sizing: border-box;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ModalHeaderClose = styled.div`
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ModalContent = styled.div`
  max-height: 80vh;
  overflow-y: auto;
  @media (max-width: 768px) {
    max-height: 70vh;
  }
`;

const ModalWrapper = styled.div<ModalWrapperProps>`
  width: 100vw;
  height: 100%;
  margin: 0;
  z-index: 10;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({ isOpen }: ModalWrapperProps) => (isOpen ? 'visible' : 'hidden')};

  ${({ backgroundOpacity, variant }: ModalWrapperProps) => {
    if (variant === 'default') {
      return `background-color: ${
        backgroundOpacity === 'light' ? 'rgba(0, 0, 0, 0.2);' : 'rgba(51, 51, 51, 0.8);'
      }`;
    }
  }}
`;

const ModalInnerWrapper = styled.div<ModelInnerWrapperProps>`
  background: #ffffff;
  z-index: 10;
  ${({ variant }: ModelInnerWrapperProps) => {
    if (variant === 'default') {
      return `
      max-width: 90vw;
      width: 500px;
    `;
    }
    if (variant === 'full-page') {
      return `
      width: 100%;
      height: 100%; 
      top: 64px; 
      height: 100%; 
      overflow-y: scroll; 
    `;
    }
  }}

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    max-width: 100vw;
  }
`;

Modal.Header = Header;
Modal.Content = Content;
Modal.Footer = Footer;
export default Modal;
