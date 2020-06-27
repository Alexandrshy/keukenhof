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
};

export type ModalType = {
    open: (event?: Event) => void;
    close: (event?: Event) => void;
    removeEventListeners: () => void;
    closeBySelector: (selector: string) => void;
    preparationOpeningModal: () => void;
    preparationClosingModal: () => void;
};

export type KeukenhofType = {
    init: (config?: ConfigType) => void;
    open: (selector: string, config?: ConfigType) => void;
    close: (selector?: string) => void;
};
