const Squad = require("../models/squadModel");
const express = require("express");
const SquadService = require("./../services/squadServices");
const squadService = new SquadService();
const catchAsync = require("./../utils/catchAsync");

exports.createSquad = catchAsync(async (req, res) => {
  const squadData = req.body;
  const userId = req.params.id;
  const newSquad = await squadService.createSquad(squadData, userId);

  res.status(201).json({
    status: "success",
    message: "Squad created successfully",
    newSquad,
  });
});

exports.getAllSquads = catchAsync(async (req, res) => {
  const squads = await squadService.getAllSquads();

  res.status(200).json({
    status: "success",
    results: squads.length,
    message: "All Squads fetched",
      squads,
  });
});

exports.getOneSquad = catchAsync(async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const squad = await squadService.getSquadById(id);

  res.status(200).json({
    status: "success",
    squad,
  });
});

exports.updateSquad = catchAsync(async (req, res) => {
  const soldiers = req.body
  const id = req.params.id

  console.log(soldiers, id)

  const squad = await squadService.updateSquad(id, soldiers);
  res.status(200).json({
    status: "success",
    squad,
  });
});

exports.deleteSquad = catchAsync(async(req,res) => {
  const id = req.params.id;

  const squad = await squadService.deleteSquad(id);

  res.status(204).json({
    status: "success",
    data: null
  });
});
