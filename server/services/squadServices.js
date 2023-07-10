const express = require("express");
const Squad = require("../models/squadModel");
const AppError = require("./../utils/AppError");

class SquadService {
  async createSquad(squadData, id) {
    const { name, soldiers } = squadData;
    console.log(squadData);
    console.log(id);

    if (!squadData || !id) {
      throw new AppError(
        `Soldier data our UserId is empty ${squadData} our ${userId}`,
        400
      );
    }

    const squad = await Squad.findOne({ name: name });

    if (squad) {
      throw new AppError("Squad name already exists ", 400);
    }

    const newSquad = await Squad.create({
      name: name,
      creator: id,
      soldiers: soldiers,
    });
    return newSquad;
  }

  async getAllSquads() {
    const squads = await Squad.find().populate("soldiers");

    if (!squads) {
      throw new AppError("Squads not found", 404);
    }

    return squads;
  }

  async getSquadById(id) {
    const squad = await Squad.findById(id).populate("soldiers");

    if (!squad) {
      throw new AppError("Soldier not found", 404);
    }

    return squad;
  }

  async updateSquad(id, soldiers) {
    // const squad = await Squad.findById(id);
    const squad = await Squad.findByIdAndUpdate(id, soldiers, {
      new: true,
      runValidators: true, // Run DB model validators again
    })

    if(!squad) {
      throw new AppError("Squad not found", 404);
    };

    return squad;
  }

  async deleteSquad(id) {
    const squad = await Squad.findByIdAndDelete(id);

    if(!squad) {
      throw new AppError("No Squad found with that ID", 404)
    };

    return squad;
  }
}

module.exports = SquadService;
