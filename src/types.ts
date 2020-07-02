export type ConfigType = {
    selector?: string;
    triggers?: HTMLElement[];
    openAttribute?: string;
    closeAttribute?: string;
    openClass?: string;
    hasAnimation?: boolean;
    scrollBehavior?: {
        isDisabled?: boolean;
        container?: string;
        defaultValue?: string;
    };
    onOpen?: () => void;
    onClose?: () => void;
    beforeOpen?: () => boolean;
    beforeClose?: () => boolean;
};

export type ModalType = {
    open: (event?: Event) => void;
    close: (event?: Event) => void;
    removeEventListeners: () => void;
    closeBySelector: (selector: string) => void;
    preparationOpeningModal: () => void;
    preparationClosingModal: () => void;
    onClick: (event: Event) => void;
    onKeydown: (event: KeyboardEvent) => void;
};

export type KeukenhofType = {
    init: (config?: ConfigType) => void;
    open: (selector: string, config?: ConfigType) => void;
    close: (selector?: string) => void;
};
