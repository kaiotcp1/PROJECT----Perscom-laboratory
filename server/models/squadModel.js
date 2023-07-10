const mongoose = require("mongoose");

const squadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Squad must be have a name"],
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    soldiers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Soldier",
        unique: true
      },
    ],
  },
  {
    strict: true,
    strictQuery: true, // Turn off strict mode for query filters
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Squad = mongoose.model("Squad", squadSchema);

module.exports = Squad;
