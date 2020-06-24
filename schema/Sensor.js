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
      type: `avg`,
    },
    soilMoistureStd: {
      sql: `std(soil_moisture)`,
      type: `number`,
    },
    ambientTemperature: {
      sql: `ambient_temperature`,
      type: `number`,
    },
    averageAmbientTemperature: {
      sql: `ambient_temperature`,
      type: `avg`,
    },
    ambientTemperatureStd: {
      sql: `std(ambient_temperature)`,
      type: `number`,
    },
    lightIntensity: {
      sql: `light_intensity`,
      type: `number`,
    },
    averageLightIntensity: {
      sql: `light_intensity`,
      type: `avg`,
    },
    lightIntensityStd: {
      sql: `std(light_intensity)`,
      type: `number`,
    },
    lightIntensity2: {
      sql: `light_intensity2`,
      type: `number`,
    },
    averageLightIntensity2: {
      sql: `light_intensity2`,
      type: `avg`,
    },
    lightIntensity2Std: {
      sql: `std(light_intensity2)`,
      type: `number`,
    },
    lightIntensityVariance: {
      sql: `(POWER(light_intensity - AVG(light_intensity), 2) + POWER(light_intensity - AVG(light_intensity2),2))/2`,
      type: `number`,
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
