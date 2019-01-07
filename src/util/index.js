import { BigNumber } from 'bignumber.js';

/**
 * Returns true if object is BigNumber, otherwise false
 *
 * @method isBigNumber
 * @param {Object}
 * @return {Boolean}
 */
var isBigNumber = function(object) {
    return object instanceof BigNumber ||
        (object && object.constructor && object.constructor.name === 'BigNumber');
};
/**
 * Returns true if object is string, otherwise false
 *
 * @method isString
 * @param {Object}
 * @return {Boolean}
 */
var isString = function(object) {
    return typeof object === 'string' ||
        (object && object.constructor && object.constructor.name === 'String');
};

var toBigNumber = function(number) {
    /*jshint maxcomplexity:5 */
    number = number || 0;
    if (isBigNumber(number))
        return number;

    if (isString(number) && (number.indexOf('0x') === 0 || number.indexOf('-0x') === 0)) {
        return new BigNumber(number.replace('0x', ''), 16);
    }

    return new BigNumber(number.toString(10), 10);
};

export function toNum(val) {
    // let x = new BigNumber(val)
    // x = x.toNumber()
    let x = toBigNumber(val).toNumber()
    return x
}