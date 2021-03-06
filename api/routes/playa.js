"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//PLAYA ROUTER
const cancha_1 = require("../controllers/cancha");
const express_1 = require("express");
const utils_1 = require("../utils/utils");
exports.playa_router = express_1.Router();
exports.playa_router.get('/playa/:playa_id/getslots', utils_1.wachiman, cancha_1.Cancha_controller.getSlotsByCanchaId);
exports.playa_router.get('/playa/', cancha_1.Cancha_controller.getAllCancha);
