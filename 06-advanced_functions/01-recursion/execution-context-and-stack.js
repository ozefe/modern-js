// The information about the process of execution of a running function is
// stored in its execution context. The execution context is an internal data
// structure that contains details about the execution of a function: where the
// control flow is now, the current variables, the value of this and few other
// internal details. One function call has exactly one execution context
// associated with it.

// When a function makes a nested call, the following happens:
// 1. The current function is paused.
// 2. The execution context associated with it is remembered in a special data
//    structure called execution context stack.
// 3. The nested call executes.
// 4. After it ends, the old execution context is retrieved from the stack, and
//    the outer function is resumed from where it stopped.

// NOTE: Because of the execution context stack recursive functions are more
// memory-heavy than their loop counterparts. But they look nicer.
