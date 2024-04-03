export const formatTitle = (title) => {
    if(title.length > 35) {
        return title.substring(0,35) + "...";
    } else {
        return title;
    }
}