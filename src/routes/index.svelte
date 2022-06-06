<script lang="ts">
  import { useMachine } from "@xstate/svelte";
  import { machine } from ".";
  const { state, send } = useMachine(machine);
</script>

<h1>{$state.value}</h1>
<button on:click={() => send("FLIPPED_AGAIN")}>TOSS AGAIN</button>
