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
    registerNodes: (nodeList: HTMLElement[]) => void;
    open: () => void;
    preparationOpeningModal: () => void;
    close: () => void;
    preparationClosingModal: () => void;
    closeBySelector: (selector: string) => void;
    onClick: (event: Event) => void;
    onKeydown: (event: KeyboardEvent) => void;
    addEventListeners: () => void;
    removeEventListeners: () => void;
    changeScrollBehavior: (value: 'disable' | 'enable') => void;
};

export type KeukenhofType = {
    init: (config?: ConfigType) => void;
    open: (selector: string, config?: ConfigType) => void;
    close: (selector?: string) => void;
};
