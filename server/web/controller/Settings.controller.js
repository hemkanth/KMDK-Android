var mongoose = require('mongoose');
var SettingsModel = require('../models/Settings.model.js');

// ********************************************* State Settings *********************************************

// Create State in State Settings
exports.StateSettings_Create = (req, res) => {
   var ReceivingData = req.body;
   console.log(ReceivingData);
   if(!ReceivingData.StateName || ReceivingData.StateName === '' || ReceivingData.StateName === null) {
      res.status(400).send({Status: false, Message: 'State name can\'t be empty' });
   } else {
      var Create_StateSetting = new SettingsModel.StateSettingSchema({
         StateName : ReceivingData.StateName,
         CreatedBy : '123',
         IfDeleted : false
      });
      Create_StateSetting.save((err, result) => {
         if(err) {
            res.status(417).send({Status: false, Message: 'Error in saving state'});
         } else {
            res.status(200).send({Status: true, Message: 'Successfully state saved'});
         }
      });
   }
}

// List State of State Settings
exports.StateSettings_List = (req, res) => {
   var ReceivingData = req.body;
   if(!ReceivingData.UserId || ReceivingData.UserId === '' || ReceivingData.UserId === null) {
      res.status(400).send({Status: false, Message: 'User details can\'t be empty'});
   } else {
      SettingsModel.StateSettingSchema.find({IfDeleted: false}, {}, {sort: {updatedAt : -1}})
      .exec((err, result) => {
         if(err) {
            res.status(417).send({Status: false, Message: 'Error in finding states'});
         } else {
            res.status(417).send({Status: true, Response: result});
         }
      });
   }
}

// View State in State Setting
exports.StateSettings_View = (req, res) => {
   var ReceivingData = req.body;
   if(!ReceivingData.StateSetting_Id || ReceivingData.StateSetting_Id === '' || ReceivingData.StateSetting_Id === null) {
      res.status(400).send({Status: false, Message: 'State Details can\'t be empty' });
   } else {
      SettingsModel.StateSettingSchema
      .findOne({_id: mongoose.Types.ObjectId(ReceivingData.StateSetting_Id), IfDeleted: false}, {}, {})
      .exec((err, result) => {
         if(err) {
            res.status(417).send({Status: false, Message: 'Error in updating states'});
         } else {
            res.status(417).send({Status: true, Message: 'Successfully state updated'});
         }
      });
   }
}

// Edit State in State Setting
exports.StateSettings_Edit = (req, res) => {
   var ReceivingData = req.body;
   if(!ReceivingData.StateSetting_Id || ReceivingData.StateSetting_Id === '' || ReceivingData.StateSetting_Id === null) {
      res.status(400).send({Status: false, Message: 'State Details can\'t be empty' });
   } else if(!ReceivingData.StateName || ReceivingData.StateName === '' || ReceivingData.StateName === null) {
      res.status(400).send({Status: false, Message: 'State name can\'t be empty' });
   } else {
      SettingsModel.StateSettingSchema
      .updateMany({_id: mongoose.Types.ObjectId(ReceivingData.StateSetting_Id), IfDeleted: false}, {$set: {StateName: ReceivingData.StateName, CreatedBy: '123'}})
      .exec((err, result) => {
         if(err) {
            res.status(417).send({Status: false, Message: 'Error in updating states'});
         } else {
            res.status(417).send({Status: true, Message: 'Successfully state updated'});
         }
      });
   }
}

// Delete State in State Setting
exports.StateSettings_Delete = (req, res) => {
   var ReceivingData = req.body;
   if(!ReceivingData.StateSetting_Id || ReceivingData.StateSetting_Id === '' || ReceivingData.StateSetting_Id === null) {
      res.status(400).send({Status: false, Message: 'State Details can\'t be empty' });
   } else {
      SettingsModel.StateSettingSchema
      .updateMany({_id: mongoose.Types.ObjectId(ReceivingData.StateSetting_Id), IfDeleted: false}, {$set: {IfDeleted: true}})
      .exec((err, result) => {
         if(err) {
            res.status(417).send({Status: false, Message: 'Error in deleting states'});
         } else {
            res.status(417).send({Status: true, Message: 'Successfully state deleted'});
         }
      });
   }
}