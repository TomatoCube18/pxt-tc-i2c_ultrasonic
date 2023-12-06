/**
  * TC-MAKECODE-I2C-Ultrasonic Block
  */
  //% color=#0fbc11 icon="\u272a" block="TomatoCube"
namespace tomatoCube {
    let ULTRASONIC_I2C_ADDR = 0x57 
    
    
    /**
     * Read Distance from Ultrasonic Sensor.
     */
    //% subcategory=UltraSonic
    //% blockId="ultrasonic_read_distance" block="i2c,distance(mm)"
    //% weight=100 
    export function pingmm(): number {
        
        pins.i2cWriteNumber(
            ULTRASONIC_I2C_ADDR,
            1,
            NumberFormat.UInt8BE,
            false
        )
        basic.pause(200)
        let readbuf = pins.i2cReadBuffer(ULTRASONIC_I2C_ADDR, pins.sizeOf(NumberFormat.UInt8LE) * 3)
        
        let distance = ((readbuf[0] << 16) + (readbuf[1] << 8) + readbuf[2]) / 1000 
        if ((10 <= distance) && (6000 >= distance)) {
            return (Math.round(distance))
        } else {
            return -1
        }
        
        
    }
}
