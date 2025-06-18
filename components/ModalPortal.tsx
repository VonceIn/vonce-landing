// components/ModalPortal.tsx
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

export const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const modalRoot = document.getElementById('modal-root');
  return modalRoot ? createPortal(children, modalRoot) : null;
};
