/**
 *
 * @param {*} args
 * @return {*}
 */
export default function takeFirstNoneFalsyValueOrLast() {
    const args = Array.prototype.slice.call(arguments);
    const result = args.find((value) => !!value);

    if (result === undefined) {
        return args.pop();
    }

    return result;
}
