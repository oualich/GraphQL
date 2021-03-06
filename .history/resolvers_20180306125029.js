export default {
    Query: {
        allPersons: async(parent, args, { Person }) => {
            const persons = await Person.find()
            return persons.map(x => {
                x._id = x._id.toString()
                return x
            })
        }
    },
    Mutation: {
        createPerson: async(parent, args, { Person }) => {
            const person = await new Person(args).save()
            person._id = person._id.toString()
            return person
        },
        changeNickName: async (parent, {id, NickName})
    }
}