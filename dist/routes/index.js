"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const model_1 = __importDefault(require("../db/model"));
router.route("/transitions").get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield model_1.default.find();
    res
        .status(200)
        .json({ data, success: true });
}));
router.route("/transitions").post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { catagory, date, amount, description } = req.body;
    const parsedData = yield model_1.default.create({
        catagory,
        date,
        amount,
        description
    });
    if (!parsedData) {
        throw new Error("An Error Occour");
    }
    res
        .status(201)
        .json({
        parsedData,
        success: true
    });
}));
router.route("/transitions").delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    const data = yield model_1.default.findByIdAndDelete(id);
    if (!data) {
        throw new Error("An Error Occour");
    }
    res.status(200).json({
        success: true,
        message: "data deleted"
    });
}));
exports.default = router;
