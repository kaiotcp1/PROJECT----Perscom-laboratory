const Soldier = require("../models/soldierModel");
const express = require("express");
const SoldierService = require("../services/soldierServices");
const soldierService = new SoldierService();
const catchAsync = require("./../utils/catchAsync");

exports.createSoldier = catchAsync(async (req, res) => {
  const soldierData = req.body;
  const userId = req.params.id
  const newSoldier = await soldierService.createSoldier(soldierData, userId);

  res.status(201).json({
    status: "success",
    message: "Soldier created successfully",
    newSoldier,
  });
});

exports.getAllSoldiers = catchAsync(async (req, res) => {
  const soldiers = await soldierService.getAllSoldiers();
  res.status(200).json({
    status: "success",
    results: soldiers.length,
      soldiers,
  });
});

exports.getOneSoldier = catchAsync(async (req, res) => {
  const id = req.params.id;
  const soldier = await soldierService.getSoldierById(id);

  res.status(200).json({
    status: "success",
      soldier,
  });
});

exports.updateSoldier = catchAsync(async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const soldier = await soldierService.updateSoldier(id, data);

  res.status(200).json({
    status: "success",
    data: {
      soldier,
    },
  });
});

exports.deleteSoldier = catchAsync(async(req,res) => {
  const id = req.params.id;

  const soldier = await soldierService.deleteSoldier(id);

  res.status(204).json({
    status: "success",
    data: null
  });
});
