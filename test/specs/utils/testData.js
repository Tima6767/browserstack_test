export function randomString(length = 8) {
    return Math.random()
        .toString(36)
        .substring(2, 2 + length);
}

export function randomEmail() {
    return `${randomString(8)}@example.com`;
}

export function randomPassword(length = 10) {
    return randomString(length);
}

export function randomText() {
    return `Test ${randomString(8)}`;
}