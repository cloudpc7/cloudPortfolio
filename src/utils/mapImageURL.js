export const mapImageURL = (arr) => {
    return arr.map((item) => {
        const imagePath = `../app/assets/images/${item.image}`;
        let image;

        try {
            image = require(imagePath);
        } catch (error) {
            console.error(`Error loading image at ${imagePath}:`, error);
        }

        return {
            ...item,
            image: image
        };
    });
};
