cube(`Sensor`, {
  sql: `SELECT * FROM \`sensorDb\`.sensor`,
  
  measures: {
    count: {
      type: `count`,
    },
    soilMoisture: {
      sql: `soil_moisture`,
      type: `number`,
    },
  averageSoilMoisture: {
      sql: `soil_moisture`,
      type: `avg`
    },
    ambientTemperature: {
      sql: `ambient_temperature`,
      type: `number`,
    },
    averageAmbientTemperature: {
      sql: `ambient_temperature`,
      type: `avg`
    },
    lightIntensity: {
      sql: `light_intensity`,
      type: `number`,
    },
    averageLightIntensity: {
      sql: `light_intensity`,
      type: `avg`
    },
    lightIntensity2: {
      sql: `light_intensity2`,
      type: `number`,
    },
    averageLightIntensity2: {
      sql: `light_intensity2`,
      type: `avg`
    },
    distance: {
      sql: `distance`,
      type: `number`,
    },
    intruderCount: {
      sql: `distance`,
      type: `count`,
      filters: [
        {
          sql: `${CUBE}.distance < 10`
        }
      ]
    },
    wateringCount: {
      sql: `soil_moisture`,
      type: `count`,
      filters: [
        { 
          sql: `${CUBE}.soil_moisture < 100`
        }
      ]
    }
  },
  dimensions: {
    timestamp: {
      sql: `time_stamp`,
      type: `time`
    }
  },
});
