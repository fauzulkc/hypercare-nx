export interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal(props: ModalProps) {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full overflow-hidden">
      <div
        className="fixed z-0 w-full h-full overflow-hidden bg-black/45"
        onClick={props.onClose}
      ></div>
      <div className="fixed z-10 m-[10vw]">{props.children}</div>
    </div>
  );
}

export default Modal;
