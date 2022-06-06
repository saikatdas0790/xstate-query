import { createMachine } from "xstate";

const machine = createMachine(
  {
    tsTypes: {} as import("./index.typegen").Typegen0,
    schema: {
      events: {} as { type: "FLIPPED_AGAIN" },
      services: {} as {
        runRandomiser: {
          data: {
            randomNumber: number;
          };
        };
      },
    },
    initial: "deciding",
    states: {
      deciding: {
        invoke: {
          src: "runRandomiser",
          onDone: [
            { actions: "logToConsole" },
            { cond: "isLessThanHalf", target: "heads" },
            { target: "tails" },
          ],
        },
      },
      heads: {
        on: {
          FLIPPED_AGAIN: {
            target: "deciding",
          },
        },
      },
      tails: {
        on: {
          FLIPPED_AGAIN: {
            target: "deciding",
          },
        },
      },
    },
  },
  {
    actions: {
      logToConsole: (context, event) => {
        console.log(event.data.randomNumber);
      },
    },
    guards: {
      isLessThanHalf: (context, event) => {
        console.log(event);
        return event.data.randomNumber < 0.5;
      },
    },
    services: {
      runRandomiser: async () => {
        return {
          randomNumber: Math.random(),
        };
      },
    },
  }
);

export { machine };
