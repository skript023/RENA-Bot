
export default class signature
{
    /**
     * Check if a given string is a valid AOB string.
     * @param str - The string to check.
     * @returns True if the string is a valid AOB string, false otherwise.
     */
    static validate(str: string): boolean
    {
        const aobRegex = /^([0-9A-Fa-f]{2}|\?)(\s([0-9A-Fa-f]{2}|\?))*$/;
        
        return aobRegex.test(str);
    }
    /**
     * Convert an AOB string into an array of bytes, ignoring placeholders ('?').
     * @param aobString - The AOB string to convert.
     * @returns An array of bytes where placeholders are represented as -1.
     */
    static convert(aobString: string): number[]
    {
        return aobString.split(' ').map(byte => byte === '?' ? -1 : parseInt(byte, 16));
    };
    /**
     * Perform a calculation from the last to the first position of a byte array.
     * @param bytes - The array of bytes.
     * @returns The result of the calculation.
     */
    static getFirstByte(bytes: number[]): number
    {
        let result = 0;
      
        for (let i = bytes.length - 1; i >= 0; i--) 
        {
            const byte = bytes[i];
            if (byte !== -1) 
            {
                result += byte;
            }
        }
      
        return result;
    };
    /**
     * Get the substraction for signature scanning to your C++ or any other scanner.
     * @param bytes - The array of bytes.
     * @returns The offset between the first and last non-placeholder bytes.
     */
    static getSubstract(bytes: number[]): number
    {
        let firstIndex = -1;
        let lastIndex = -1;

        for (let i = 0; i < bytes.length; i++) 
        {
            if (bytes[i] !== -1) 
            {
                if (firstIndex === -1) 
                {
                    firstIndex = i;
                }

                lastIndex = i;
            }
        }

        if (firstIndex !== -1 && lastIndex !== -1) 
        {
            return lastIndex - firstIndex;
        }

        return 0;
    }
}
