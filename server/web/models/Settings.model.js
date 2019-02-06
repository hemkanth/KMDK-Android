var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// State Settings Schema
var StateSettingSchema = mongoose.Schema({
   StateName: { type: String, required: true, unique: true },
   CreatedBy: { type: String },
   IfDeleted: { type: Boolean, required: true }
   }, 
   {timestamp: true}
);
var VarStateSettingSchema = mongoose.model('StateSetting', StateSettingSchema, 'StateSetting_List');

// District Settings Schema
var DistrictSettingSchema = mongoose.Schema({
   DistrictName: { type: String, required: true, unique: true },
   State_Id: { type: String }
});
var VarDistrictSettingSchema = mongoose.model('DistrictSetting', DistrictSettingSchema, 'DistrictSetting_List');

// Export Schema
module.exports = {
   StateSettingSchema : VarStateSettingSchema,
   DistrictSettingSchema : VarDistrictSettingSchema
} 