export const mapImageURL = (arr) => {
    return arr.map((item) => {
        console.log(item);
        return {
            ...item,
            image: require("../app/assets/images/" + item.url) // Make sure you map the correct property
        };
    });
};

