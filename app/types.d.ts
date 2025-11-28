declare global {
  interface JQuery {
    flexslider(options: FlexSliderOptions): void;
    magnificPopup(options: MagnificPopupOptions): void;
  }
}

interface FlexSliderOptions {
  animation?: string;
  selector?: string;
  slideshowSpeed?: number;
  animationSpeed?: number;
  controlNav?: boolean;
  directionNav?: boolean;
  keyboard?: boolean;
  start?: (slider: { [key: string]: unknown }) => void;
}

interface MagnificPopupOptions {
  type?: string;
  closeOnContentClick?: boolean;
  closeBtnInside?: boolean;
  fixedContentPos?: boolean;
  mainClass?: string;
  image?: {
    verticalFit?: boolean;
  };
  iframe?: {
    markup?: string;
    patterns?: {
      youtube?: {
        index: string;
        id: string;
        src: string;
      };
      vimeo?: {
        index: string;
        id: string;
        src: string;
      };
      gmaps?: {
        index: string;
        src: string;
      };
    };
    srcAction?: string;
  };
}

export {};
