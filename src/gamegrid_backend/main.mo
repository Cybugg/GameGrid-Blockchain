import Principal "mo:base/Principal";
actor {
  public query func greet() : async Text {
    return "Hello, " # "User!";
  };
  public shared (msg) func whoami(): async Principal{
    msg.caller;
  };
};
