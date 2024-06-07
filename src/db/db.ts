import {DbType} from "./db-type";

export const db: DbType = {
    blogs: [
        {
            "id": "string",
            "name": "string",
            "description": "string",
            "websiteUrl": "string"
        }
    ],
    posts: [
        {
            "id": "string",
            "title": "string",
            "shortDescription": "string",
            "content": "string",
            "blogId": "string",
            "blogName": "string"
        }
    ]
}