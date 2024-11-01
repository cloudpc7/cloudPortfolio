import { baseUrl } from "../app/baseUrl";

export const mapImageURL = (arr) => {
    return arr.map((item) => {
        return {
            ...item,
            image: baseUrl + item.url // Make sure you map the correct property
        };
    });
};

