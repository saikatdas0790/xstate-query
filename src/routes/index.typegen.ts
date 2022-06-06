// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  eventsCausingActions: {
    logToConsole: "done.invoke.(machine).deciding:invocation[0]";
  };
  internalEvents: {
    "done.invoke.(machine).deciding:invocation[0]": {
      type: "done.invoke.(machine).deciding:invocation[0]";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    runRandomiser: "done.invoke.(machine).deciding:invocation[0]";
  };
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    runRandomiser: "FLIPPED_AGAIN";
  };
  eventsCausingGuards: {
    isLessThanHalf: "done.invoke.(machine).deciding:invocation[0]";
  };
  eventsCausingDelays: {};
  matchesStates: "deciding" | "heads" | "tails";
  tags: never;
}
