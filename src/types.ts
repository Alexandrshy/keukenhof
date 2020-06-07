export type ConfigType = {
    selector?: string;
    triggers?: HTMLElement[];
    openAttribute?: string;
    closeAttribute?: string;
    openClass?: string;
};

export type ModalType = {
    open: (event: Event) => void;
    close: (event: Event) => void;
};

export type KeukenhofType = {
    init: (config?: ConfigType) => void;
};
