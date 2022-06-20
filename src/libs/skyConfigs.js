/**
 * @author sylwesterdigital / https://github.com/sylwesterdigital
 */

/* eslint-disable */
console.log("skyConfigs.js -- imported")

const settings = {
  day: {
    turbidity: 11,
    rayleigh: 3,
    mieCoefficient: 0.005,
    mieDirectionalG: 0.995,
    luminance: 0.8,
    inclination: 0.1, // elevation / inclination
    azimuth: 0.25, // Facing front,
    sun: !true
  },
  night: {
    turbidity: 6.7,
    rayleigh: 2,
    mieCoefficient: 0.012,
    mieDirectionalG: 0.822,
    luminance: 1,
    inclination: 0.4965, // elevation / inclination
    azimuth: 0.2581, // Facing front,
    sun: !true
  },
  moon: {
    turbidity: 1,
    rayleigh: 0,
    mieCoefficient: 0.012,
    mieDirectionalG: 0.822,
    luminance: 1,
    inclination: 0.3123, // elevation / inclination
    azimuth: 0.4098, // Facing front,
    sun: !true
  },
  dark: {
    turbidity: 0,
    rayleigh: 0.035,
    mieCoefficient: 0.005,
    mieDirectionalG: 0.258,
    luminance: 1,
    inclination: 0.2798, // elevation / inclination
    azimuth: 0.4749, // Facing front,
    exposure:0.1931,
    sun: !true
  },
  cold: {
    turbidity: 0.4,
    rayleigh: 0.165,
    mieCoefficient: 0.005,
    mieDirectionalG: 0.995,
    luminance: 1,
    inclination: 0.3556, // elevation / inclination
    azimuth: 0.2472, // Facing front,
    exposure:0.0847,
    sun: true
  },
  sunset: {
    turbidity: 20,
    rayleigh: 2.454,
    mieCoefficient: 0.022,
    mieDirectionalG: 0.841,
    luminance: 1,
    inclination: 0.4951, // elevation / inclination
    azimuth: 0.2666, // Facing front,
    exposure:1,
    sun: true    
  },
  gloom: {
    turbidity: 2,
    rayleigh: 200,
    mieCoefficient: 0.022,
    mieDirectionalG: 0.841,
    luminance: 1,
    inclination: 0.4951, // elevation / inclination
    azimuth: 0.2666, // Facing front,
    exposure:1,
    sun: true    
  },  
  
  
}
export let SkyPresets = settings