const express = require("express");
const Soldier = require("../models/soldierModel");
const AppError = require("./../utils/AppError");

class SoldierService {
  async createSoldier(soldierData, id) {
    if (!soldierData || !id) {
      throw new AppError("Soldier Data is empty our userId not defined", 400);
    }

  

    const {
      name,
      patent,
      active,
      service,
      specialization,
      badges,
      condecoration,
      steam,
      country,      
    } = soldierData;

    const newSoldier = await Soldier.create({
      ...soldierData,
      creator: id
    });
    console.log(newSoldier);
    return newSoldier;
  };

  async getAllSoldiers() {
    const soldiers = await Soldier.find();
    console.log(soldiers);

    if (!soldiers) {
      throw new AppError("Soldiers not found", 404);
    }

    return soldiers;
  };

  async getSoldierById(id) {
    const soldier = await Soldier.findById(id);

    if (!soldier) {
      throw new AppError("Soldier not found", 404);
    }

    return soldier;
  };

  async updateSoldier(id, data) {
    const soldier = Soldier.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true, // Run DB model validators again
    });

      if(!soldier) {
        throw new AppError('No Soldier found with that ID', 404)
      }

      return soldier;
  };

  async deleteSoldier(id) {
    const soldier = await Soldier.findByIdAndDelete(id);

    if(!soldier) {
      throw new AppError("No soldier found with that ID", 404)
    };

    return soldier;
  }
}

module.exports = SoldierService;
