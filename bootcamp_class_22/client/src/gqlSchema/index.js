import {gql} from "@apollo/client"

const createMessageMutation = gql `
mutation createMessage($message: String){
    createMessage(message: $message){
        id
        message
    }
}
`

export {
    createMessageMutation
}