module.exports = mongoose => {
    const Item = mongoose.model(
        "item",
        mongoose.Schema(
            {
                itemName: String,
                purchased: Boolean
            },
            { timestamps: true }
        )
    )
    return Item
}