import {DbType} from "./db-type";

export const db: DbType = {
    blogs: [
        {
            "id": "string",
            "name": "string", //maxLength: 15
            "description": "string", //maxLength: 500
            "websiteUrl": "string" //maxLength: 100 || regex: ^https://([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$

        }
    ],
    posts: [
        {
            "id": "string",
            "title": "string", //maxLength: 30
            "shortDescription": "string", //maxLength: 100
            "content": "string", //maxLength: 1000
            "blogId": "string",
            "blogName": "string"
        }
    ]
}