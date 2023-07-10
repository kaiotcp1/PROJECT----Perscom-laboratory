const mongoose = require("mongoose");

const soldierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Soldier must be have a name"],
      maxLength: 12,
    },
    patent: {
      type: String,
      required: [true, "Soldier must be have a patent"],
    },
    active: {
      type: Boolean,
      required: [true, "Soldier is active or not ?"],
    },
    service: {
      type: String,
      required: [true, "Soldier must be have a service"],
      enum: ["infantary"],
    },
    specialization: {
      type: String,
      required: [true, "Soldier must be have a specialization"],
      enum: ["special-force"],
    },
    badges: {
      type: String,
      enum: ["combat-pilot", 'Curso-CIGS'],
    },
    condecoration: {
      type: String,
      enum: ["corpo de tropa"],
    },
    steam: {
      type: String,
      required: [true, "Soldier must be have a steam id"],
    },
    country: {
      type: String,
      required: [true, "Soldier must be have a country"],
      enum: ["br", "usa"],
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    strict: true,
    strictQuery: true, // Turn off strict mode for query filters
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Soldier = mongoose.model("Soldier", soldierSchema);

module.exports = Soldier;
