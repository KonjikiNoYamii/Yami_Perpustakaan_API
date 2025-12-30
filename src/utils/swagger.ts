import config  from "../utils/env";
import swaggerJSDoc from "swagger-jsdoc";

const option: swaggerJSDoc.Options ={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'PERPUSTAKAAN API YAMI',
            version:'1.0.0',
            description:'Dokumnetasi Lengkap Perpustakaan Api',
            contact:{
                name:'Backend developer'
            },
        },
        servers:[
        {
            url:`http://${config.HOST}:${config.PORT}`,
            description:'Development'
        }
        ],
        components:{
            securitySchemes:{
                bearerAuth:{
                    type:'http',
                    scheme:'bearer',
                    bearerFormat:'JWT'
                }
            }
        },
        security:[
            {
                bearerAuth:[],
            },
        ],
    },
    apis:['src/routes/*.ts']
}

const swaggerSpec = swaggerJSDoc(option)

export default swaggerSpec