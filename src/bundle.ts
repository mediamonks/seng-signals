// allows us to specify --noEmitHelpers within our tsconfig.json
// this skips emitting helpers in every file, we just load them once here
import "ts-helpers";

// Export all classes (named and default) that you want to be publicly available
// in the browser as named exports here.
// Interfaces should be ignored, as they don't export any code.
export {Signal} from './lib/Signal';
export {Signal1} from './lib/Signal1';
export {Signal2} from './lib/Signal2';
export {Signal3} from './lib/Signal3';
export {SignalAbstract} from './lib/SignalAbstract';
export {SignalConnection} from './lib/SignalConnection';
