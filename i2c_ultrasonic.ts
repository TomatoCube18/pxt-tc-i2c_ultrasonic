/**
  * TC-MAKECODE-I2C-Ultrasonic Block
  */
  //% color="#275C6B" icon="\uf07e" weight=95 block="I2C Ultrasonic"
namespace i2cUltrasonic {
    let ULTRASONIC_I2C_ADDR = 0x57 
    
    
    /**
     * Read Distance from Ultrasonic Sensor.
     */
    //% blockId="ultrasonic_read_distance" block="distance(mm), TRIG (SCL) ECHO (SDA)."
    //% weight=100 
    export function pingmm(): number {
        
        pins.i2cWriteNumber(
            ULTRASONIC_I2C_ADDR,
            1,
            NumberFormat.UInt8BE,
            false
        )
        basic.pause(120)
        let readbuf = pins.i2cReadBuffer(ULTRASONIC_I2C_ADDR, pins.sizeOf(NumberFormat.UInt8LE) * 3)
        
        let distance = (readbuf[0] << 16) + (readbuf[1] << 8) + (readbuf[2] / 1000); 

        if ((10 <= Math.round(distance)) && (6000 >= Math.round(distance))) {
            return (Math.round(distance))
        } else {
            return -1
        }
        
    }
}
