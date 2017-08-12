export const show = (navigator, text = undefined) => {
    navigator.showLightBox({
        screen: "sejasa.LoadingLightBox",
        passProps: { text },
        style: {
            backgroundBlur: "dark",
            backgroundColor: 'rgba(0,0,0,0.5)',
            tapBackgroundToDismiss: false,
        }
    });
};

export const dismiss = (navigator) => {
    navigator.dismissLightBox();
};
