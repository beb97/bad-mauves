export const withBase = (path: string) => {
    return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
};

export const goBack = (event: Event) => {
    if (window.history.length > 1) {
        event.preventDefault();
        window.history.back();
    }
};