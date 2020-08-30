// module.exports = mongoose => {
//     const Item = mongoose.model(
//         "item",
//         mongoose.Schema(
//             {
//                 itemName: String,
//                 store: String,
//                 purchased: Boolean
//             },
//             { timestamps: true }
//         )
//     )
//     return Item
// }

module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            itemName: String,
            store: String,
            purchased: Boolean
        },
        { timestamps: true }
    )

    schema.method("toJSON", function() {
        const {__v, _id, ...object } = this.toObject()
        object.id = _id
        return object
    })

    const Item = mongoose.model("item", schema)
    return Item
}