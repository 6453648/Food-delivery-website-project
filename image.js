"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
let attributes = {
    
    id: {
        type: "string",
    },
     
    images: "json",
     
    dish: {
        collection: "dish",
        via: "images",
    },
     
    order: "number",
    /** */
    group: {
        collection: "group",
        via: "images",
    },
     
    uploadDate: "string",
};
let Model = {
    beforeCreate(imageInit, next) {
        if (!imageInit.id) {
            imageInit.id = uuid_1.v4();
        }
        next();
    },
};
module.exports = {
    primaryKey: "id",
    attributes: attributes,
    ...Model,
};