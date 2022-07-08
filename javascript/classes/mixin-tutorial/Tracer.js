// inherits dynamically from the parameter passed to the lambda function
const Tracer = (SuperClass) => class extends SuperClass {
    trace(msg) {
        console.info(`Message: ${msg}`);
    }
}

export { Tracer };