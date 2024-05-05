/**
 * Builds a class names list from the given arguments.
 * The list may contain conditional class names (false or undefined) that will be filtered out.
 *
 * @param classNames A list of conditional class names to join.
 * @returns The class names list.
 */
export function cn(...classNames: (string | false | undefined)[]): string {
    return classNames.filter(Boolean).join(' ');
}

/**
 * Converts an optional boolean to true or undefined.
 * This is useful when you want to conditionally set an attribute based on an (optional) boolean value.
 *
 * @param value The optional boolean value.
 * @returns true if the value is true, otherwise undefined.
 */
export function ifTrue(value: boolean | undefined): true | undefined {
    return value ?? false ? true : undefined;
}

/**
 * Returns true if the given value is false otherwise undefined.
 * This is useful when you want to conditionally set an attribute based on an (optional) boolean value.
 *
 * @param value The optional boolean value.
 * @returns true if the value is false, otherwise undefined.
 */
export function ifFalse(value: boolean | undefined): true | undefined {
    return value ?? false ? undefined : true;
}
