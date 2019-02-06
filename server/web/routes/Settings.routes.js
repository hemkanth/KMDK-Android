// Export Routes
module.exports = (app) => {
   
   // import required controller
   var SettingsController = require('../controller/Settings.controller.js');

   // Settings Routes
   app.post('/API/Settings/StateCreate', SettingsController.StateSettings_Create);
   app.post('/API/Settings/StateList', SettingsController.StateSettings_List);
   app.post('/API/Settings/StateEdit', SettingsController.StateSettings_Edit);
   app.post('/API/Settings/StateDelete', SettingsController.StateSettings_Delete);
}