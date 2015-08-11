define({ "api": [  {    "type": "get",    "url": "/reports/:validation_public_key",    "title": "Historical Reports for a Validator",    "name": "historicalReports",    "group": "Reports",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>ValidationPublicKey</p> ",            "optional": false,            "field": "validation_public_key",            "description": "<p>Ripple validation public key</p> "          },          {            "group": "Success 200",            "type": "<p>Array</p> ",            "optional": false,            "field": "reports",            "description": "<p>Array of Report objects with date, validations properties</p> "          }        ]      }    },    "version": "0.0.0",    "filename": "api/controllers/ValidationReportsController.js",    "groupTitle": "Reports"  },  {    "type": "get",    "url": "/reports",    "title": "Latest Report for all Validators",    "name": "latestReport",    "group": "Reports",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Json</p> ",            "optional": false,            "field": "validators",            "description": "<p>public keys mapped to data report data by validator</p> "          },          {            "group": "Success 200",            "type": "<p>Date</p> ",            "optional": false,            "field": "date",            "description": "<p>date of report formatted as YYYY-MM-DD</p> "          }        ]      }    },    "version": "0.0.0",    "filename": "api/controllers/ValidationReportsController.js",    "groupTitle": "Reports"  },  {    "type": "get",    "url": "/validations",    "title": "",    "name": "listValidations",    "group": "Validations",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Integer</p> ",            "optional": false,            "field": "validations_count",            "description": "<p>total validations for validator in past 24 hours</p> "          },          {            "group": "Success 200",            "type": "<p>ValidationPublicKey</p> ",            "optional": false,            "field": "validation_public_key",            "description": "<p>rippled validation public key</p> "          }        ]      }    },    "version": "0.0.0",    "filename": "api/controllers/ValidationsController.js",    "groupTitle": "Validations"  },  {    "type": "get",    "url": "/validators",    "title": "List of all known validators",    "name": "listValidators",    "group": "Validators",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "domain",            "description": "<p>verified domain of validator if exists</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "error",            "description": "<p>domain verification failure step</p> "          },          {            "group": "Success 200",            "type": "<p>ValidationPublicKey</p> ",            "optional": false,            "field": "validation_public_key",            "description": "<p>ripple validation public key</p> "          }        ]      }    },    "version": "0.0.0",    "filename": "api/controllers/ValidatorsController.js",    "groupTitle": "Validators"  }] });