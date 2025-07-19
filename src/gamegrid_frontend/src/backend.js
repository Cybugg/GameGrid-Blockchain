import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory as backend_idl, canisterId as backend_id } from "../../.dfx/local/canisters/backend";

const agent = new HttpAgent({
  host: "http://localhost:8000"
});

export const backend = Actor.createActor(backend_idl, {
  agent,
  canisterId: backend_id,
});
